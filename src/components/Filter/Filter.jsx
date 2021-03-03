import { Form } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { setFilter } from "../../store/actions/filterCards";
import {closeTreeView,openTreeView} from '../../store/actions/treeview'
import "./Filter.scss";




const Filter = ({isOpen,filterBy}) => {
    const dispatch = useDispatch();
        if(isOpen) {
            return(
            <Form >
                <Form.Check style={{color:"#fff"}} checked={!isOpen} onChange={() => dispatch(closeTreeView())} type="radio" label="Close treeview" />
            </Form>

            )
        }else {
            return (
                <Form className="filter-form">
                    <div className="filter-form-container">
                        <Form.Check style={{color:"#fff"}} checked={isOpen} onChange={() => dispatch(openTreeView())} type="radio" label="Open treeview" />
                        <Form.Check style={{color:"#fff"}} checked={filterBy === "all"} onChange={() => dispatch(setFilter("all"))} type="radio" label="Filter by all" />
                        <Form.Check style={{color:"#fff"}} checked={filterBy === "filesize"} onChange={() => dispatch(setFilter("filesize"))} type="radio" label="Filter by filesize" />
                    </div>
                    <div className="filter-form-container">
                        <Form.Check style={{color:"#fff"}} checked={filterBy === "category"} onChange={() => dispatch(setFilter("category"))} type="radio" label="Filter by category" />
                        <Form.Check style={{color:"#fff"}} checked={filterBy === "timestamp"} onChange={() => dispatch(setFilter("timestamp"))} type="radio" label="Filter by timestamp" />
                        <Form.Check style={{color:"#fff"}} checked={filterBy === "name"} onChange={() => dispatch(setFilter("name"))} type="radio" label="Filter by name" />
                    </div>
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

const mapDispatchToProps = (dispatch) => {
    return {
        closeTreeView: () => dispatch(closeTreeView()),
        openTreeView: () => dispatch(openTreeView()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Filter);
