import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import directory from '../assets/img/directory';

    const games = [
    { title: 'Payday 2', description: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.' },
    { title: 'Undertale', description: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.' },
    { title: 'Resident Evil 4', description: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.' },
    { title: 'Elden Ring', description: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.' },
    { title: 'While True Learn()', description: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.' },
    { title: 'Nier Replicant', description: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.' }
    ];

const BestGames = () => {
    const renderGameCards = () => {
        return games.map((game, index) => (
        <Col md={4} sm={6} xs={12} className="mb-4" key={index}>
            <Card className=' bg-transparent text-white border-0'>
            <Card.Img variant="top" src={directory["exampleGame" +(index +1)]} />
            <Card.Body>
                <Card.Title>{game.title}</Card.Title>
                <Card.Text>{game.description}</Card.Text>
                <Button variant="primary" type='radio' className=' rounded-4 border-5'>Button</Button>
            </Card.Body>
            </Card>
        </Col>
        ));
    };

    return (
        <section className="py-5">
        <Container className="text-center py-5">
            <p className="mb-4" style={{ fontSize: '1.6rem' }}>Los mejores juegos del mes</p>
            <Row>
            {renderGameCards()}
            </Row>
            <div className="d-flex justify-content-center flex-wrap">
            <a href="#"><img className="m-3" src={directory.google} alt="Google" /></a>
            <a href="#"><img className="m-3" src={directory.microsoft} alt="Microsoft" /></a>
            <a href="#"><img className="m-3" src={directory.apple} alt="Apple" /></a>
            <a href="#"><img className="m-3" src={directory.facebook} alt="Facebook" /></a>
            <a href="#"><img className="m-3" src={directory.twitter} alt="Twitter" /></a>
            </div>
        </Container>
        </section>
    );
};

export default BestGames;
