import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart } from '../redux/Slice';
import { Button } from 'react-bootstrap';

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleRemoveItem = (itemId) => {
        dispatch(removeItemFromCart(itemId));
    };

    return (
        <div className="mt-4">
            {cart.length === 0 ? (
                <p>El carrito está vacío por el momento.</p>
            ) : (
                <div>
                    {cart.map((item, index) => (
                        <div key={index} className="d-flex align-items-center mb-3">
                            <img src={item.imageSrc} alt={item.name} className="me-3" style={{ width: '50px', height: 'auto' }} />
                            <div>
                                <h6 className="mb-0">{item.name}</h6>
                                <p className="text-muted mb-0">${item.price}</p>
                            </div>
                            <Button variant="danger" size="sm" className="ms-auto" onClick={() => handleRemoveItem(item.id)}>
                                Eliminar
                            </Button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
