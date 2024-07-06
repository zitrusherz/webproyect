import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/Slice';
import { Link } from 'react-router-dom';
import directoryGames from '../assets/img/directoryGames';

const GameCard = ({ imageSrc, name, price, category, id }) => {
    const dispatch = useDispatch();
    const addToCart = () => {
        const item = { imageSrc, name, price, category, id };
        dispatch(addItemToCart(item));
    };

    return (
            <Card style={{ width: '18rem' }}>
                <Link to={`/shop/${id}`} 
                state={{ imageSrc, name, price, category, id }}>
                    <Card.Img variant="top" src={imageSrc} 
                    onError={(e) => {
                        e.target.src = directoryGames.imgNo;}}height={"220px"} />
                </Link>
                
                <Card.Body className='bg-dark-subtle'>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className='text-capitalize text-black-50'>{category}</Card.Text>
                    <Card.Text>
                        Price: ${price}
                    </Card.Text>
                    <Button variant="primary" onClick={addToCart}>Add to Cart</Button>
                </Card.Body>
            </Card>
    );
};

export default GameCard;
