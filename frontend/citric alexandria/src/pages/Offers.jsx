import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import directory from '../assets/img/directory';
const Offers = () => {
    return (
        <section className="py-5">
            <Container className="py-5  text-white">
                <Row className="mb-4 mb-lg-5 ">
                    <Col md={8} xl={6} className="text-center mx-auto">
                        <h1 className="fw-bold text-success mb-2">Our Services</h1>
                        <h3 className="fw-bold">What we can do for you</h3>
                    </Col>
                </Row>
                <Row className="row-cols-1 row-cols-md-2 mx-auto  bg-gradient" style={{ maxWidth: '900px' }}>
                    <Col className="mb-5">
                        <img className="rounded img-fluid shadow" src={directory.exampleGame1} alt="Service 1" />
                    </Col>
                    <Col className="d-md-flex align-items-md-end align-items-lg-center mb-5">
                        <div>
                            <h5 className="fw-bold">Lorem ipsum dolor sit&nbsp;</h5>
                            <p className="text-white-50 mb-4">Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p>
                            <Button className="btn-primary shadow" type="button">Learn more</Button>
                        </div>
                    </Col>
                </Row>
                <Row className="row-cols-1 row-cols-md-2 mx-auto bg-gradient" style={{ maxWidth: '900px' }}>
                    <Col className="order-md-last mb-5">
                        <img className="rounded img-fluid shadow" src={directory.exampleGame2}  alt="Service 2" />
                    </Col>
                    <Col className="d-md-flex align-items-md-end align-items-lg-center mb-5">
                        <div>
                            <h5 className="fw-bold">Lorem ipsum dolor sit&nbsp;</h5>
                            <p className="text-white-50 mb-4">Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p>
                            <Button className="btn-primary shadow" type="button">Learn more</Button>
                        </div>
                    </Col>
                </Row>
                <Row className="row-cols-1 row-cols-md-2 mx-auto bg-gradient" style={{ maxWidth: '900px' }}>
                    <Col className="mb-5">
                        <img className="rounded img-fluid shadow" src={directory.exampleGame3}  alt="Service 3" />
                    </Col>
                    <Col className="d-md-flex align-items-md-end align-items-lg-center mb-5">
                        <div>
                            <h5 className="fw-bold">Lorem ipsum dolor sit&nbsp;</h5>
                            <p className="text-white-50 mb-4">Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p>
                            <Button className="btn-primary shadow" type="button">Learn more</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Offers;
