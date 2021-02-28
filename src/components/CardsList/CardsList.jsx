import {Container,CardColumns,InputGroup,FormLabel } from "react-bootstrap";
import { connect,useDispatch } from "react-redux";
import CardItem from "../Card/Card";
import orderBy from 'lodash/orderBy'
import { setFilter } from "../../store/actions/filterCards";
import {setTotalPages } from '../../store/actions/pagesCreator'
import Tree from "../Tree/Tree";



const CardsList = ({items,filterBy}) => {
    const dispatch = useDispatch(); 
    return (
        <div>
            <Container style={{margin:"100px 0 0 0"}}>
            <InputGroup >
                <InputGroup.Prepend>
                <InputGroup.Radio checked={filterBy === "filesize"} onChange={() => dispatch(setFilter("filesize"))}  aria-label="Radio button for following text input" />
                <FormLabel>Sort by filesize</FormLabel>
                <InputGroup.Radio checked={filterBy === "category"} onChange={() => dispatch(setFilter("category"))}  aria-label="Radio button for following text input" />
                <FormLabel>Sort by category</FormLabel>
                <InputGroup.Radio checked={filterBy === "timestamp"} onChange={() => dispatch(setFilter("timestamp"))}  aria-label="Radio button for following text input" />
                <FormLabel>Sort by timestamp</FormLabel>
                </InputGroup.Prepend>
            </InputGroup>
                <CardColumns>
                    {items.splice(0,20).map((item,index) => {
                        return <CardItem  key={index} card={item}/>
                    })}  
                </CardColumns>
                <Tree style={{margin:"0 0 300px 0"}} data={items} />

            </Container>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
      items: sortBy(state.cards.items,state.filter.filterBy),
      filterBy:state.filter.filterBy,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setFilter:(filterBy) => dispatch(setFilter(filterBy)),
        setTotalPages: (totalCount, perPage) => dispatch(setTotalPages(totalCount, perPage)),

    }
}
const sortBy = (items,filterBy) =>{
    return orderBy(items,filterBy)
}
  
export default connect(mapStateToProps,mapDispatchToProps)(CardsList);