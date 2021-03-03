import {Navbar,Nav,NavbarBrand} from 'react-bootstrap';


const Footer = () => {

    return(
        <Navbar  className="footer-navbar mt-10" fixed="bottom" bg="dark" variant="dark">
            <Nav className="mr-auto">
            <NavbarBrand>Cards app 2021</NavbarBrand>

            </Nav>
      </Navbar>
    )
}

export default Footer;