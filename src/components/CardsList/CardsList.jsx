import {Container,CardColumns,InputGroup,FormLabel } from "react-bootstrap";
import { connect,useDispatch } from "react-redux";
import CardItem from "../Card/Card";
import orderBy from 'lodash/orderBy'
import { setFilter } from "../../store/actions/filterCards";

const CardsList = ({items}) => {
    const dispatch = useDispatch(); 
    return (
        <div>
            <Container style={{margin:"100px 0 0 0"}}>
            <InputGroup >
                <InputGroup.Prepend>
                <InputGroup.Radio onChange={() => dispatch(setFilter("name"))}  aria-label="Radio button for following text input" />
                </InputGroup.Prepend>
                <FormLabel>Sort by filesize</FormLabel>
            </InputGroup>
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

const mapDispatchToProps = (dispatch) => {
    return{
        setFilter:(filterBy) => dispatch(setFilter(filterBy))
    }
}
const sortBy = (items,filterBy) =>{
    return orderBy(items,filterBy)
}
  
export default connect(mapStateToProps,mapDispatchToProps)(CardsList);