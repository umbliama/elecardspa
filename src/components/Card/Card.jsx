import {Card} from 'react-bootstrap'

const CardItem = ({card,keyId}) => {
    function closeImg() {
        document.querySelector('.card-container').style.display = "none";
    }
    const url ="http://contest.elecard.ru/frontend_data/";
    const {image} = card;
    return (
            <Card >
            <Card.Img  fluid variant="top" src={`${url}${image}`} />
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
            </Card>
        
    )
}

export default CardItem;