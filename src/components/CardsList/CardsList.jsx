import {Container, CardDeck} from "react-bootstrap";
import { connect } from "react-redux";
import CardItem from "../Card/Card";
import orderBy from 'lodash/orderBy'
import {setTotalPages } from '../../store/actions/pagesCreator'
import Tree from "../Tree/Tree";


const CardsList = ({items,filterBy,isOpen,perPage,currentPage}) => {
    const indexOfLastItem = currentPage * perPage;
    const indexOfFirstItem = indexOfLastItem - perPage
    const currentItems = items.slice(indexOfFirstItem,indexOfLastItem)
    if(isOpen) {
        return (
            <Container>
                <Tree style={{margin:"0 0 300px 0"}} data={items} />
            </Container>
        )
    }else {
        return (
            <Container >
                <CardDeck style={{margin:"200px 0 50px 0"}}>
                    {sortBy(currentItems,filterBy).map((item,index) => {
                        return <CardItem keyId={index}  key={index} card={item}/>
                    })}  
                </CardDeck>
            </Container>

        )
    }
}
const mapStateToProps = (state) => {
    return {
      items: state.cards.items,
      filterBy:state.filter.filterBy,
      isOpen:state.treeview.isOpen,
      perPage:state.pages.perPage,
      currentPage:state.pages.currentPage,
}
}

//TODO BINDACTIONS
const mapDispatchToProps = (dispatch) => {
    return{
        setTotalPages: (totalCount, perPage) => dispatch(setTotalPages(totalCount, perPage)),
    }
}
const sortBy = (items,filterBy) =>{
    return orderBy(items,filterBy,"asc")
}
  
export default connect(mapStateToProps,mapDispatchToProps)(CardsList);