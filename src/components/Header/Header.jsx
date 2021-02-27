import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';
const Header = () => {
    return (
        <Navbar fixed="top" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">

            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
            </Form>
      </Navbar>
    
    )
}

export default Header;