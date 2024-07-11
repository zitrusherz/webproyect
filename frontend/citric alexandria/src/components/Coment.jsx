import React from 'react';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import directory from '../assets/img/directory';

const items = [
    {
        text: "Gran selección de juegos y entrega rápida. El soporte al cliente fue muy útil con mis consultas.",
        name: "John Smith",
        title: "Entusiasta de Juegos",
        img: directory.avatar1
    },
    {
        text: "Encontré todos mis juegos favoritos aquí y a excelentes precios. La interfaz de usuario es muy intuitiva.",
        name: "Jane Doe",
        title: "Ávida Jugadora",
        img: directory.avatar2
    },
    {
        text: "Su servicio es excelente. Tuve un problema con mi pedido y lo resolvieron rápida y eficientemente.",
        name: "Mary Johnson",
        title: "Cliente Satisfecho",
        img: directory.avatar3
    }
];

const Coment = () => {
    return (
        <>
            <section>
                <Container className="py-5">
                    <div className="mx-auto" style={{ maxWidth: '900px' }}>
                        <Row className="row-cols-1 row-cols-md-2 d-flex justify-content-center">
                            <Col className="mb-4">
                                <Card className="bg-primary-subtle">
                                    <Card.Body className="text-center px-4 py-5 px-md-5 text-primary">
                                        <p className="fw-bold card-text mb-2">Completamente Gestionado</p>
                                        <h5 className="fw-bold card-title mb-3">Explora y compra los mejores juegos de manera fácil y rápida</h5>
                                        <Button className="btn-primary btn-sm" type="button">Aprender más</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="mb-4">
                                <Card className="bg-danger-subtle">
                                    <Card.Body className="text-center px-4 py-5 px-md-5 text-danger">
                                        <p className="fw-bold card-text mb-2">Completamente Gestionado</p>
                                        <h5 className="fw-bold card-title mb-3">Encuentra tus juegos favoritos a precios increíbles</h5>
                                        <Button className="btn-danger btn-sm" type="button">Aprender más</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="mb-4">
                                <Card className="bg-info-subtle">
                                    <Card.Body className="text-center px-4 py-5 px-md-5 text-info">
                                        <p className="fw-bold card-text mb-2">Completamente Gestionado</p>
                                        <h5 className="fw-bold card-title mb-3">Obtén soporte y servicio al cliente de alta calidad</h5>
                                        <Button className="btn-info btn-outline-info text-white btn-sm" type="button">Aprender más</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>

            <section className="py-5 mt-5">
                <Container className="py-5">
                    <Row className="mb-5">
                        <Col md={8} xl={6} className="text-center mx-auto">
                            <p className="fw-bold text-success mb-2">Testimonios</p>
                            <h2 className="fw-bold"><strong>Lo que la gente dice sobre nosotros</strong></h2>
                            <p className="text-muted">No importa el proyecto, nuestro equipo puede manejarlo.&nbsp;</p>
                        </Col>
                    </Row>
                    <Row className="aqui row-cols-1 row-cols-sm-2 row-cols-lg-3 d-sm-flex justify-content-sm-center">
                        {items.map((item, index) => (
                            <Col className="mb-4" key={index}>
                                <div className="d-flex flex-column align-items-center align-items-sm-start">
                                    <p className="bg-dark border rounded border-dark p-4">{item.text}</p>
                                    <div className="d-flex">
                                        <Image roundedCircle className="  me-3 object-fit-fill" width="50" height="50" src={item.img} alt={`Avatar ${index + 1}`} />
                                        <div>
                                            <p className="fw-bold text-primary mb-0">{item.name}</p>
                                            <p className=" text-white mb-0">{item.title}</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Coment;
