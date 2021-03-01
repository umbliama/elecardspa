import {Container,CardGroup,InputGroup,FormLabel, Row , Col, CardDeck} from "react-bootstrap";
import { connect,useDispatch } from "react-redux";
import CardItem from "../Card/Card";
import orderBy from 'lodash/orderBy'
import { setFilter } from "../../store/actions/filterCards";
import {setTotalPages } from '../../store/actions/pagesCreator'
import Tree from "../Tree/Tree";
import {openTreeView,closeTreeView} from '../../store/actions/treeview'
import {incPage} from '../../store/actions/pagesCreator'


const CardsList = ({items,filterBy,isOpen,perPage}) => {
    const dispatch = useDispatch(); 
    if(isOpen) {
        return (
            <Container style={{margin:"100px 0 0 0"}}>
                <InputGroup.Radio checked={!isOpen} onChange={() => dispatch(closeTreeView())}  aria-label="Radio button for following text input" />
                <Tree style={{margin:"0 0 300px 0"}} data={items} />
            </Container>
        )
    }else {
        return (
            <Container >
            <InputGroup.Radio checked={isOpen} onChange={() => dispatch(openTreeView())}  aria-label="Radio button for following text input" />
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
                <CardDeck>
                    {items.splice(0 + perPage,perPage).map((item,index) => {
                        return <CardItem  key={index} card={item}/>
                    })}  
                </CardDeck>
            </Container>

        )
    }
}
const mapStateToProps = (state) => {
    return {
      items: sortBy(state.cards.items,state.filter.filterBy),
      filterBy:state.filter.filterBy,
      isOpen:state.treeview.isOpen,
      perPage:state.pages.perPage
    }
}

//TODO BINDACTIONS
const mapDispatchToProps = (dispatch) => {
    return{
        setFilter:(filterBy) => dispatch(setFilter(filterBy)),
        setTotalPages: (totalCount, perPage) => dispatch(setTotalPages(totalCount, perPage)),
        openTreeView: () => dispatch(openTreeView()),
        closeTreeView: () => dispatch(closeTreeView()),
        incPage:() => dispatch(incPage())
    }
}
const sortBy = (items,filterBy) =>{
    return orderBy(items,filterBy,"desc")
}
  
export default connect(mapStateToProps,mapDispatchToProps)(CardsList);