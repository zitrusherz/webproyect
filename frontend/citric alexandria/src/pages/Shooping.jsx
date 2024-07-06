import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Button } from 'react-bootstrap';
import directory from '../assets/img/directory';
import { clearCart } from '../redux/Slice';
import { Link } from 'react-router-dom';

const Shopping = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const [showLoader, setShowLoader] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);
    const user = useSelector(state => state.usuario.loggedIn)
    const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price), 0);

    const handlePayButtonClick = () => {
        setShowLoader(true); 
        setTimeout(() => {
            setShowLoader(false); 
            setShowThankYou(true);
            dispatch(clearCart());
        }, 6000); 
    };

    return (
        <Container className="py-5 text-white">
            <h1 className="text-center mb-5" style={{ display: showThankYou ? "none" : "" }}>Detalle de Compra</h1>
            {cart.length === 0 ? (
                <p></p>
            ) : (
                <div style={{ display: showLoader || showThankYou ? "none" : "" }}>
                    {cart.map((item, index) => (
                        <div key={index} className="d-flex align-items-center mb-3 bg-gradient p-2 px-3 rounded-2" style={{ width:"fit-content"}}>
                            <img src={item.imageSrc} alt={item.name} className="me-3" style={{ width: '100px', height: 'auto' }} />
                            <div>
                                <h6 className="mb-0">{item.name}</h6>
                                <p className=" mb-0">${item.price}</p>
                            </div>
                        </div>
                    ))}
                    <div className="mt-4">
                        <h5>Total: ${totalPrice.toFixed(2)}</h5>
                        {user && <Button variant="primary" className="mt-3" onClick={handlePayButtonClick}>Ir a Pagar</Button>}
                        {!user && <Button as={Link} to={"/login"} className="mt-3">Ir a Loggearse</Button> }
                    </div>
                </div>
            )}
            {showLoader && <div className='loader' style={{ display: showThankYou ? "none" : "" }}></div>}
            {showThankYou && (
                <div className="text-center mt-4">
                    <img src={directory.check} alt="Compra completada" style={{ width: '100px', height: 'auto' }} />
                    <h3>¡Gracias por tu compra!</h3>
                </div>
            )}
        </Container>
    );
};

export default Shopping;
