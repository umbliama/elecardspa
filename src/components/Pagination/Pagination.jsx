import { useEffect } from "react";
import { Pagination } from "react-bootstrap";
import { connect,useDispatch } from 'react-redux'
import {setTotalPages} from '../../store/actions/pagesCreator'

const PaginationStyles= {
    margin:"0 0 100px 0"
}


const BasicPagination = (items) => {


    return (
        <Pagination style={PaginationStyles}>
            {items}
        </Pagination>
    )

}

const mapStateToProps = (state) => {
    return {
        items:state.cards.items
    }
}






export default connect(mapStateToProps, null)(BasicPagination)

