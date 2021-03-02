import {Card} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import {storeClosedCards} from '../../store/actions/fetchCards/fetchCards'
import "./Cards.scss";

const CardItem = ({card,keyId}) => {
    const dispatch = useDispatch();
    const url ="http://contest.elecard.ru/frontend_data/";
    const {image,category,filesize,timestamp} = card;

    const closeImg = (keyId,image,category,filesize,timestamp) => {
        dispatch(storeClosedCards(keyId,image,category,filesize,timestamp))
        document.querySelector(`.card-${keyId}`).style.display = "none"

    }
    JSON.parse(localStorage.getItem("state")).cards.closedCards.map(item => {
        if(document.querySelector(`.card-${item.id}`)) {
            document.querySelector(`.card-${item.id}`).style.display = "none"
        }
    })
    return (
        <Card className={`card-item card-${keyId}`}>
        <Card.Header><span onClick={()  =>closeImg(keyId,image,category,filesize,timestamp) }>X</span></Card.Header>
        <Card.Img  variant="top" src={`${url}${image}`} />
        <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
            Filesize : {filesize}
            
        </Card.Text>
        <Card.Text>
        Timestamp : {new Date(timestamp).toISOString()}
        </Card.Text>
        </Card.Body>
        <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
        </Card>

    )
}

export default CardItem;