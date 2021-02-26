import {Container,CardColumns } from "react-bootstrap";
import { connect } from "react-redux";
import CardItem from "../Card/Card";

const CardsList = ({items}) => {

    return (
        <div>
            <Container>
                <CardColumns>
                    {items.splice(0,15).map((item,index) => {
                        return <CardItem  key={index} card={item}/>
                    })}
                </CardColumns>
            </Container>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
      items: state.cards.items,
    }
  }
  
export default connect(mapStateToProps)(CardsList);