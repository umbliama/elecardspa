import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {clearClosedCards} from '../../store/actions/fetchCards'

const ResetState = () => {
    const dispatch = useDispatch();
    return (
        <Form>
            <Form.Check style={{color:"#fff"}} onChange={() => dispatch(clearClosedCards())} label="Reset cards" type="radio" />
        </Form>
    )
}

export default ResetState;