import {Container, CardDeck} from "react-bootstrap";
import { connect } from "react-redux";
import CardItem from "../Card/Card";
import orderBy from 'lodash/orderBy'
import {setTotalPages } from '../../store/actions/pagesCreator'
import Tree from "../Tree/Tree";
import Pagination from '../Pagination/Pagination'


const CardsList = ({items,filterBy,isOpen,perPage,currentPage}) => {
    const indexOfLastItem = currentPage * perPage;
    const indexOfFirstItem = indexOfLastItem - perPage
    const currentItems = items.slice(indexOfFirstItem,indexOfLastItem)
     if(isOpen) {
        return (
            <Container>
                <Tree className="tree"  data={items} />
            </Container>
        )
    }else {
        return (
            <Container >
                <CardDeck className="card-deck">
                    {sortBy(currentItems,filterBy).map((item,index) => {
                        return <CardItem keyId={index}  key={index} card={item}/>
                    })}  
                </CardDeck>
                <Pagination />
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