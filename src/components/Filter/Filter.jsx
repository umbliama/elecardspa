import { Form } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { setFilter } from "../../store/actions/filterCards";
import {openTreeView,closeTreeView} from '../../store/actions/treeview'





const Filter = ({isOpen,filterBy}) => {
    const dispatch = useDispatch();
        if(isOpen) {
            return(
                <Form>
                <Form.Check style={{color:"#fff"}} checked={!isOpen} onChange={() => dispatch(closeTreeView())} type="radio" label="Close treeview" />
                <Form.Check style={{color:"#fff"}} checked={filterBy === "filesize"} onChange={() => dispatch(setFilter("filesize"))} type="radio" label="Filter by filesize" />
                <Form.Check style={{color:"#fff"}} checked={filterBy === "category"} onChange={() => dispatch(setFilter("category"))} type="radio" label="Filter by category" />
                <Form.Check style={{color:"#fff"}} checked={filterBy === "timestamp"} onChange={() => dispatch(setFilter("timestamp"))} type="radio" label="Filter by timestamp" />
            </Form>

            )
        }else {
            return (
                <Form>
                    <Form.Check style={{color:"#fff"}} checked={isOpen} onChange={() => dispatch(openTreeView())} type="radio" label="Open treeview" />
                    <Form.Check style={{color:"#fff"}} checked={filterBy === "all"} onChange={() => dispatch(setFilter("all"))} type="radio" label="Filter by all" />
                    <Form.Check style={{color:"#fff"}} checked={filterBy === "filesize"} onChange={() => dispatch(setFilter("filesize"))} type="radio" label="Filter by filesize" />
                    <Form.Check style={{color:"#fff"}} checked={filterBy === "category"} onChange={() => dispatch(setFilter("category"))} type="radio" label="Filter by category" />
                    <Form.Check style={{color:"#fff"}} checked={filterBy === "timestamp"} onChange={() => dispatch(setFilter("timestamp"))} type="radio" label="Filter by timestamp" />
                </Form>
            )
        }
        
}


const mapStateToProps = (state) => {
    return {
      filterBy:state.filter.filterBy,
      isOpen:state.treeview.isOpen,
}
}

//TODO BINDACTIONS
const mapDispatchToProps = (dispatch) => {
    return{
        setFilter:(filterBy) => dispatch(setFilter(filterBy)),
        openTreeView: () => dispatch(openTreeView()),
        closeTreeView: () => dispatch(closeTreeView()),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Filter);
