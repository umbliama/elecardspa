import { useEffect } from 'react';
import {Card} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import {storeClosedCards} from '../../store/actions/fetchCards'
import "./Card.scss";
import {urlToFetch} from '../../utils/index'



const CardItem = ({card,keyId}) => {
    const dispatch = useDispatch();
    const {image,category,filesize,timestamp} = card;
    const closedCards = useSelector(state => state.cards.closedCards)
    const cardsItem = document.querySelectorAll(".card-item");
    const closeImg = (keyId,image,category,filesize,timestamp) => {
        dispatch(storeClosedCards(keyId,image,category,filesize,timestamp))
        document.querySelector(`.card-${keyId}`).style.display = "none"

    }

    useEffect(() => {
        JSON.parse(localStorage.getItem("state")).cards.closedCards.forEach(item => {
            if(document.querySelector(`.card-${item.id}`)) {
                document.querySelector(`.card-${item.id}`).style.display = "none"
            }
        })
        if(closedCards.length === 0) {
            for(const card of cardsItem) {
                card.style.display = "block"
            } 
            
        }
    })
    return (
        <Card className={`card-item card-${keyId}`}>
        <Card.Header><span onClick={()  =>closeImg(keyId,image,category,filesize,timestamp) }>X</span></Card.Header>
        <Card.Img  variant="top" src={`${urlToFetch }${image}`} />
        <Card.Body>
        <Card.Title>Card title : {image}</Card.Title>
        <Card.Text>
            Filesize : {filesize}
            
        </Card.Text>
        <Card.Text>
        Timestamp : {new Date(timestamp).toUTCString()}
        </Card.Text>
        </Card.Body>

        </Card>

    )
}

export default CardItem;