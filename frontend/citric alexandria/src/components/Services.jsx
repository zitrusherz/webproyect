import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import directory from '../assets/img/directory';

const Services = () => {
    const services = [
        {
            title: "Lorem ipsum dolor sit",
            description: "Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.",
        },
        {
            title: "Lorem ipsum dolor sit",
            description: "Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.",
        },
        {
            title: "Lorem ipsum dolor sit",
            description: "Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.",
        },
        {
            title: "Lorem ipsum dolor sit",
            description: "Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.",
        }
    ];

    return (
        <section>
            <Container className="bg-dark py-5">
                <Row className="justify-content-center">
                    <Col md={8} xl={6} className="text-center">
                        <h2 className="fw-bold text-success mb-2">Our Services</h2>
                        <h4 className="fw-bold">What we can do for you</h4>
                    </Col>
                </Row>
                <div className="py-5 px-lg-5">
                    <Row className="row-cols-1 row-cols-md-2 mx-auto" style={{ maxWidth: '900px' }}>
                        {services.map((service, index) => (
                            <Col className="mb-5" key={index}>
                                <Card className="shadow-sm text-white bg-secondary" >
                                    <Card.Body className="px-4 py-5 px-md-5">
                                        <div className="bs-icon-lg d-flex justify-content-center align-items-center mb-3 bs-icon" style={{ top: '1rem', right: '1rem', position: 'absolute' }}>
                                            <img src={directory["icon" + (index +1)]} alt="icon" style={{width:"30px"}} />
                                        </div>
                                        <h5 className="fw-bold">{service.title}&nbsp;</h5>
                                        <p className="">{service.description}</p>
                                        <Button className="btn btn-primary shadow  px-3 rounded-4" type="button">Learn more</Button>
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
