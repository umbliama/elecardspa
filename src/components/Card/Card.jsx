import {Card} from 'react-bootstrap'

const CardItem = ({card,keyId}) => {

    const url ="http://contest.elecard.ru/frontend_data/";
    const {image,filesize,timestamp} = card;
    
    return (
            <Card style={{minWidth:"300px"}}>
            <Card.Img  variant="top" src={`${url}${image}`} />
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                {filesize}
                
            </Card.Text>
            <Card.Text>
            {new Date(timestamp).toISOString()}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
            </Card>
        
    )
}

export default CardItem;