import {Navbar,Nav} from 'react-bootstrap';
import Filter from '../Filter/Filter'
import ResetState from '../ResetState/ResetState'
const Header = () => {
    return (
        <Navbar fixed="top" bg="dark" variant="dark">
            
            <Nav className="mr-auto">
            <Filter />
            <ResetState />
            </Nav>
      </Navbar>
    
    )
}

export default Header;