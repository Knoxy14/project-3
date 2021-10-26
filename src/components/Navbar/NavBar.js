import React from 'react';
import { useAuth0 } from '../../react-auth0-spa';
import "./styles.css"
import notLoggedInAvatar from "../../assets/notLoggedInAvatarPic.jpg";
import placeholderLogo from "../../assets/nesController.png";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

const NavBar = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    const { user } = useAuth0();

    return(
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/">
                    <img
                    alt=""
                    src={placeholderLogo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top logoImage"
                    />{' '}
                    Retro Game Collector
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/collection">Collection</Nav.Link>
                        <Nav.Link href="/profile">Profile</Nav.Link>
                    </Nav>
                    <Nav>
                    {!isAuthenticated && (
                        <span>
                        <Button color="primary" variant="light" onClick={() => loginWithRedirect({})}>Log In</Button>
                        <img alt="genericAvatar" style={{borderRadius:"13%"}}className="notLoggedInPicture" src={notLoggedInAvatar} />
                        </span>
                    )}

                    {isAuthenticated && (
                        <span className='loggedInNavAvatar'>
                            <NavDropdown   title={user.given_name} id="basic-nav-dropdown userDropdown" className='welcomeName'>
                            <NavDropdown.Item className='logOutButton' color='primary' variant='light' onClick={() => logout()}>Log Out</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item >Badges...Coming soon</NavDropdown.Item>
                            </NavDropdown>
                            <img alt="profilePicture" className="profilePicture justify-content-end" src={user.picture} />
                        </span>
                    )}
                    {isAuthenticated}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar;