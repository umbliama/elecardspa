import {Navbar,Nav} from 'react-bootstrap';


const Footer = () => {

    return(
        <Navbar style={{margin:"100px 0 0 0;"}} className="mt-10" fixed="bottom" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
      </Navbar>
    )
}

export default Footer;