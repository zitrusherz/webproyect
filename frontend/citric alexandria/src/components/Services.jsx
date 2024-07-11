import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import directory from '../assets/img/directory';

const Services = () => {
    const services = [
        {
            title: "Catálogo Extenso",
            description: "Contamos con una amplia variedad de juegos para todas las plataformas. Desde los últimos lanzamientos hasta los clásicos favoritos.",
        },
        {
            title: "Entrega Rápida",
            description: "Recibe tus juegos en tiempo récord. Nuestro servicio de entrega rápida asegura que puedas empezar a jugar cuanto antes.",
        },
        {
            title: "Soporte 24/7",
            description: "Nuestro equipo de soporte está disponible las 24 horas del día, los 7 días de la semana para ayudarte con cualquier consulta o problema.",
        },
        {
            title: "Precios Competitivos",
            description: "Ofrecemos los mejores precios del mercado, con descuentos y ofertas especiales que no querrás perderte.",
        }
    ];

    return (
        <section>
            <Container className="bg-dark py-5">
                <Row className="justify-content-center">
                    <Col md={8} xl={6} className="text-center">
                        <h2 className="fw-bold text-success mb-2">Nuestros Servicios</h2>
                        <h4 className="fw-bold">Lo que podemos hacer por ti</h4>
                    </Col>
                </Row>
                <div className="py-5 px-lg-5">
                    <Row className="row-cols-1 row-cols-md-2 mx-auto" style={{ maxWidth: '900px' }}>
                        {services.map((service, index) => (
                            <Col className="mb-5" key={index}>
                                <Card className="shadow-sm text-white bg-secondary">
                                    <Card.Body className="px-4 py-5 px-md-5">
                                        <div className="bs-icon-lg d-flex justify-content-center align-items-center mb-3 bs-icon" style={{ top: '1rem', right: '1rem', position: 'absolute' }}>
                                            <img src={directory["icon" + (index + 1)]} alt="icon" style={{ width: "30px" }} />
                                        </div>
                                        <h5 className="fw-bold">{service.title}&nbsp;</h5>
                                        <p className="">{service.description}</p>
                                        <Button className="btn btn-primary shadow px-3 rounded-4" type="button">Aprender más</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default Services;
