import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import { URLBACKEND } from '../App';

const GameForm = () => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`${URLBACKEND}datagames/api/games/`, {
                name,
                category,
                price
            });
            alert("Juego añadido exitosamente");

        } catch (error) {
            console.error('Error al añadir juego:', error);
            alert("Campos inválidos");
        }
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card>
                        <Card.Header className="text-center bg-secondary text-white">
                            <h3>Añadir Juego</h3>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formName" className="mb-3">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese el nombre del juego" value={name} onChange={(e) => setName(e.target.value)} required />
                                </Form.Group>

                                <Form.Group controlId="formCategory" className="mb-3">
                                    <Form.Label>Categoría</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese la categoría del juego" value={category} onChange={(e) => setCategory(e.target.value)} required />
                                </Form.Group>

                                <Form.Group controlId="formPrice" className="mb-3">
                                    <Form.Label>Precio</Form.Label>
                                    <Form.Control type="number" placeholder="Ingrese el precio del juego" value={price} onChange={(e) => setPrice(e.target.value)} required />
                                </Form.Group>

                                <Button variant="secondary" type="submit" className="w-100">
                                    Añadir Juego
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default GameForm;
