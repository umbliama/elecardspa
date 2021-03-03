import {Navbar,Nav} from 'react-bootstrap';
import Filter from '../Filter/Filter'
import ResetState from '../ResetState/ResetState'
const Header = () => {
    return (
<Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Filter />
      <ResetState />
    </Nav>
    <Nav>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    
    )
}

export default Header;