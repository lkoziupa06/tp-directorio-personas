import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from "react-router-dom";

export const NavBar = () =>{
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <Nav className="ms-auto">
                <Link className= "nav-link" to="/">Home</Link>
                <Link className= "nav-link" to="/contacto">Contacto</Link>
                <Link className= "nav-link" to="/estadisticas">Estadisticas</Link>
            </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
    
  );
}
