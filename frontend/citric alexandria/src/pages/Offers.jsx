import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import directory from '../assets/img/directory';

const Offers = () => {
    return (
        <section className="py-5">
            <Container className="py-5 text-white">
                <Row className="mb-4 mb-lg-5">
                    <Col md={8} xl={6} className="text-center mx-auto">
                        <h1 className="fw-bold text-success mb-2">Nuestros Servicios</h1>
                        <h3 className="fw-bold">Lo que podemos hacer por ti</h3>
                    </Col>
                </Row>
                <Row className="row-cols-1 row-cols-md-2 mx-auto bg-gradient" style={{ maxWidth: '900px' }}>
                    <Col className="mb-5">
                        <img className="rounded img-fluid shadow" src={directory.exampleGame1} alt="Servicio 1" />
                    </Col>
                    <Col className="d-md-flex align-items-md-end align-items-lg-center mb-5">
                        <div>
                            <h5 className="fw-bold">Catálogo Extenso&nbsp;</h5>
                            <p className="text-white-50 mb-4">Contamos con una amplia variedad de juegos para todas las plataformas. Desde los últimos lanzamientos hasta los clásicos favoritos.</p>
                            <Button className="btn-primary shadow" type="button">Aprender más</Button>
                        </div>
                    </Col>
                </Row>
                <Row className="row-cols-1 row-cols-md-2 mx-auto bg-gradient" style={{ maxWidth: '900px' }}>
                    <Col className="order-md-last mb-5">
                        <img className="rounded img-fluid shadow" src={directory.exampleGame2} alt="Servicio 2" />
                    </Col>
                    <Col className="d-md-flex align-items-md-end align-items-lg-center mb-5">
                        <div>
                            <h5 className="fw-bold">Entrega Rápida&nbsp;</h5>
                            <p className="text-white-50 mb-4">Recibe tus juegos en tiempo récord. Nuestro servicio de entrega rápida asegura que puedas empezar a jugar cuanto antes.</p>
                            <Button className="btn-primary shadow" type="button">Aprender más</Button>
                        </div>
                    </Col>
                </Row>
                <Row className="row-cols-1 row-cols-md-2 mx-auto bg-gradient" style={{ maxWidth: '900px' }}>
                    <Col className="mb-5">
                        <img className="rounded img-fluid shadow" src={directory.exampleGame3} alt="Servicio 3" />
                    </Col>
                    <Col className="d-md-flex align-items-md-end align-items-lg-center mb-5">
                        <div>
                            <h5 className="fw-bold">Soporte 24/7&nbsp;</h5>
                            <p className="text-white-50 mb-4">Nuestro equipo de soporte está disponible las 24 horas del día, los 7 días de la semana para ayudarte con cualquier consulta o problema.</p>
                            <Button className="btn-primary shadow" type="button">Aprender más</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Offers;
