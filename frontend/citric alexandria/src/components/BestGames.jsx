import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import directory from '../assets/img/directory';

const games = [
    { title: 'Payday 2', description: 'Disfruta de este emocionante juego de robos en primera persona. Planifica y ejecuta atracos con tus amigos en Payday 2.' },
    { title: 'Undertale', description: 'Sumérgete en un mundo subterráneo lleno de monstruos y toma decisiones que afectarán el desenlace de la historia en Undertale.' },
    { title: 'Resident Evil 4', description: 'Acompaña a Leon S. Kennedy en su misión para rescatar a la hija del presidente en este clásico juego de terror y supervivencia.' },
    { title: 'Elden Ring', description: 'Explora un vasto mundo de fantasía y lucha contra temibles enemigos en el esperado juego de rol de acción, Elden Ring.' },
    { title: 'While True: Learn()', description: 'Desarrolla tus habilidades de programación y resuelve problemas en este divertido y educativo juego de simulación.' },
    { title: 'Nier Replicant', description: 'Descubre la fascinante historia y los combates intensos en Nier Replicant, una remasterización del clásico juego de rol y acción.' }
];

const BestGames = () => {
    const renderGameCards = () => {
        return games.map((game, index) => (
            <Col md={4} sm={6} xs={12} className="mb-4" key={index}>
                <Card className='bg-transparent text-white border-0'>
                    <Card.Img variant="top" src={directory["exampleGame" + (index + 1)]} />
                    <Card.Body>
                        <Card.Title>{game.title}</Card.Title>
                        <Card.Text>{game.description}</Card.Text>
                        <Button variant="primary" type='radio' className='rounded-4 border-5'>Más información</Button>
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
