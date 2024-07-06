import React from 'react';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import directory from '../assets/img/directory';

const items = [
    {
        text: "Nisi sit justo faucibus nec ornare amet, tortor torquent. Blandit class dapibus, aliquet morbi.",
        name: "John Smith",
        title: "Erat netus",
        img: directory.avatar1
    },
    {
        text: "Nisi sit justo faucibus nec ornare amet, tortor torquent. Blandit class dapibus, aliquet morbi.",
        name: "Jane Doe",
        title: "Nullam accumsan",
        img: directory.avatar2
    },
    {
        text: "Nisi sit justo faucibus nec ornare amet, tortor torquent. Blandit class dapibus, aliquet morbi.",
        name: "Mary Johnson",
        title: "Vestibulum ante",
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
                                        <p className="fw-bold card-text mb-2">Fully Managed</p>
                                        <h5 className="fw-bold card-title mb-3">Lorem ipsum dolor sit&nbsp;nullam et quis ad cras porttitor</h5>
                                        <Button className="btn-primary btn-sm" type="button">Learn more</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="mb-4">
                                <Card className="bg-danger-subtle">
                                    <Card.Body className="text-center px-4 py-5 px-md-5 text-danger">
                                        <p className="fw-bold card-text mb-2">Fully Managed</p>
                                        <h5 className="fw-bold card-title mb-3">Lorem ipsum dolor sit&nbsp;nullam et quis ad cras porttitor</h5>
                                        <Button className="btn-danger btn-sm" type="button">Learn more</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="mb-4">
                                <Card className="bg-info-subtle">
                                    <Card.Body className="text-center px-4 py-5 px-md-5 text-info">
                                        <p className="fw-bold card-text mb-2">Fully Managed</p>
                                        <h5 className="fw-bold card-title mb-3">Lorem ipsum dolor sit&nbsp;nullam et quis ad cras porttitor</h5>
                                        <Button className="btn-info btn-outline-info text-white btn-sm" type="button">Learn more</Button>
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
                            <p className="fw-bold text-success mb-2">Testimonials</p>
                            <h2 className="fw-bold"><strong>What People Say About us</strong></h2>
                            <p className="text-muted">No matter the project, our team can handle it.&nbsp;</p>
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
