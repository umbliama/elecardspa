import { useEffect } from "react";
import { connect,useDispatch, useSelector } from 'react-redux'
import {setTotalPages,setCurrentPage} from '../../store/actions/pagesCreator'
import "./Pagination.scss"
import ReactPaginate from 'react-paginate';


const BasicPagination = (items) => {
const dispatch = useDispatch();
const allItems = items.items.length;
const perPage = useSelector(state => state.pages.perPage)
const totalPages = Math.ceil(allItems/perPage)



const onPageChange = (e) => {
  dispatch(setCurrentPage(e.selected + 1))
}

    return (
        <div className="pages">
        <ReactPaginate breakClassName={'pagination__break'} pageClassName={'pagination__item'} containerClassName={'pagination'} pageCount={totalPages} pageRangeDisplayed={10} onPageChange={(e) => onPageChange(e)}/>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        items:state.cards.items,
        perPage:state.pages,
        totalCount:state.pages.totalCount,
        currentPage:state.pages.currentPage,

    }
}






export default connect(mapStateToProps, null)(BasicPagination)

