import React, { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <Navbar bg="" variant="light">
            <Navbar.Brand href="home" className="travel-logo">Travel Town</Navbar.Brand>
            <Nav className="div-link" activeKey="5">
                <Nav.Link eventKey="1"><Link to="/home" style={{textDecoration: 'none'}}>Home</Link></Nav.Link>
                <Nav.Link href="#features"  eventKey="2">Destination</Nav.Link>
                <Nav.Link href="#pricing"  eventKey="3">Blog</Nav.Link>
                <Nav.Link href="#contact"  eventKey="4">Contact</Nav.Link>
                <Nav.Link eventKey="5" className="login-btn"><Link to="/login" style={{color: 'white'}}>{loggedInUser.name?loggedInUser.name:'Login'}</Link></Nav.Link>
            </Nav>
        </Navbar>
        </div>
    );
};

export default Header;