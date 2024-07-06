import React from 'react';
import { useLocation } from 'react-router-dom';
import { Button, Card, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/Slice';

function GamePage() {
    const location = useLocation();
    const dispatch = useDispatch();
    const { imageSrc, name, price, category, id } = location.state;

    const add = () => {
        const item = { imageSrc, name, price, category, id };
        dispatch(addItemToCart(item));
    };

    return (
        <Container className="py-5">
            <Card style={{ width: '80%', maxWidth: '1200px', margin: 'auto' }}>
                <Card.Img variant="top" src={imageSrc} height={"400px"} />
                <Card.Body className='bg-dark-subtle'>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className='text-capitalize text-black-50'>{category}</Card.Text>
                    <Card.Text>
                        Price: ${price}
                    </Card.Text>
                </Card.Body>
                <Button onClick={add}>Comprar</Button>
            </Card>
        </Container>
    );
}

export default GamePage;
