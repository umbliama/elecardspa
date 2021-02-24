import Card from "../Card/Card";


const CardsList = ({cards}) => {
    const url ="http://contest.elecard.ru/frontend_data/";
    return (
        <div>
            <ul>
                {cards.splice(0,5).map(card => {
                    return <Card image={`${url}${card.image}`}/>
                })}
            </ul>
        </div>
    )
}

export default CardsList;