import { Form } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import {clearClosedCards} from '../../store/actions/fetchCards/fetchCards'

const ResetState = () => {
    const dispatch = useDispatch();
    return (
        <Form>
            <Form.Check style={{color:"#fff"}} onChange={() => dispatch(clearClosedCards())} label="Reset state" type="radio" />
        </Form>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearClosedCards: () => dispatch(clearClosedCards())
    }
}

export default connect(null,mapDispatchToProps)(ResetState);