import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function AppNavbar() {
  const cart =useSelector((state)=>state.cart)
  return (
    <Navbar bg="light" expand="lg" className='fixed-top'>
      <Container>
        <Link className='navbar-brand' to="/">cartApp</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-link' to="/">products</Link>
            <Link className='nav-link' to="/cart">cart-{cart.length}</Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;