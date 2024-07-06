import React, { useState,useEffect } from 'react';
import { Navbar, Nav, Container, Button, Offcanvas } from 'react-bootstrap';
import directory from "../assets/img/directory";
import Cart from './Cart';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { logout } from '../redux/Slice';

const Header = () => {
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);
    const [userMenu, setUserMenu] = useState(false);
    const cart = useSelector(state => state.cart);
    const user = useSelector(state => state.usuario.userData);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();

    const outUser = () => {
        handleMouseLeave();
        dispatch(logout());
    };

    const handleMouseEnter = () => {
        if (user) {
            setUserMenu(true);
        }
    };

    const handleMouseLeave = () => {
        if (user) {
            setUserMenu(false);
        }
    };
    useEffect(() => {
        const carritoElement = document.getElementById('carrito');
        if(cart.length){
            if (carritoElement) {
                carritoElement.classList.add('pulse-cart');
                setTimeout(() => {
                    carritoElement.classList.remove('pulse-cart');
                }, 1000);
            }
        }
        
    }, [cart]);

    return (
        <Navbar bg="dark" variant="dark" expand="md" sticky="top" className="py-3" id="mainNav">
            <Container>
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                    <span className="bs-icon-sm bs-icon-circle bs-icon-primary shadow d-flex justify-content-center align-items-center me-2 bs-icon">
                        <img id="logo" src={directory.logo} alt="Logo" style={{ height: "40px" }} />
                    </span>
                    <span>Citric Alexandria</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setOpen(!open)} />
                <Navbar.Collapse in={open} id="navcol-1">
                    <Nav className="mx-auto text-uppercase">
                        <Nav.Link as={Link} to="/shop">Tienda</Nav.Link>
                        <Nav.Link as={Link} to="/offers">Ofertas</Nav.Link>
                        <Nav.Link as={Link} to="/souvenirs">Souvenirs</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
                    </Nav>
                    <div  className="position-relative" style={{ marginRight: "30px", marginBottom: open ? "20px" : "0px" }}>
                        <span  className={`mx-auto has-quantity reflow-cart-toggler has-summary`} style={{cursor:"pointer"}} onClick={handleShow}>
                            <span></span>
                            <svg id='carrito'

                                className="bi bi-cart2 mx-auto"
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                                style={{ width: '35px', height: '35px', color: '#fff' }}
                            >
                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"></path>
                            </svg>
                        </span>
                        <Offcanvas show={show} onHide={handleClose}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Carrito de compras</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Cart />
                            </Offcanvas.Body>
                            <Link style={{ textDecoration: "none" }} to={(cart.length > 0) ? "/shopping" : ""} onClick={handleClose}>
                                <Button
                                    variant="secondary"
                                    className="mx-auto my-3"
                                    style={{ display: 'block', width: '150px' }}
                                >
                                    Comprar
                                </Button>
                            </Link>
                        </Offcanvas>
                    </div>
                    <Button variant="primary" as={Link}
                        to={user ? "#" : "/login"}
                        className="user-menu shadow position-relative"
                        style={{ background: 'rgb(161,55,244)', border: 'none' }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {user ? user : "Iniciar sesión"}
                        {user && (
                            <div className={`coso position-absolute top-100 w-auto d-flex flex-column gap-2 bg-dark rounded-4 ${userMenu ? 'd-block' : 'd-none'}`}>
                                <Button>
                                    <Link to={"/gameadd"} className=' text-white text-decoration-none'>agregar juego</Link>
                                </Button>
                                <Button>
                                    <Link to={"/userpage"} className=' text-white text-decoration-none'>usuario</Link>
                                </Button>
                                <Button  as={Link} to={"/"} onClick={outUser}>finalizar</Button>
                            </div>
                        )}
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
