import { useEffect } from "react";
import { connect,useDispatch } from 'react-redux'
import {setTotalPages} from '../../store/actions/pagesCreator'
const PaginationStyles= {
    margin:"0 0 100px 0"
}


const BasicPagination = (items) => {
const pages = []
const dispatch = useDispatch();
const allItems = items.items.length;

useEffect(()=>{
    dispatch(setTotalPages(allItems,10))
},[])
    return (
        <div style={{margin:"0 0 100px 0"}} className="pages">
            {pages.map((page,index) => {
                return <span className="page" key={index}>{page}</span>
            })}
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        items:state.cards.items
    }
}






export default connect(mapStateToProps, null)(BasicPagination)

