import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import directory from '../assets/img/directory';
const Souvenirs = () => {
    const items = [
        { img: directory.merch1, title: "Camiseta clasica", text: "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus." },
        { img: directory.merch2, title: "Camiseta terror", text: "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus." },
        { img: directory.merch3, title: "Camiseta sadness", text: "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus." },
        { img: directory.merch4, title: "Camiseta american", text: "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus." },
    ];

    return (
        <section className="py-5">
            <Container className="py-5 ">
                <Row className="mb-5">
                    <Col md={8} xl={6} className="text-center mx-auto text-white">
                        <h2 className="fw-bold text-success">Souvenirs</h2>
                        <h6 className="">Proximamente para nuestros mejores clientes tendremos los siguientes Souvenirs...</h6>
                    </Col>
                </Row>
                <Row className="row-cols-1 row-cols-md-2 mx-auto" style={{ maxWidth: '900px' }}>
                    {items.map((item, index) => (
                        <Col className="mb-4 bg-gradient text-white-50" key={index}>
                            <div>
                                <a href="#">
                                    <img className="rounded img-fluid shadow  fit-cover" src={item.img} style={{ height: '250px' }} alt={item.title} />
                                </a>
                                <div className="py-4">
                                    <Badge bg="primary" className="mb-2">Camiseta</Badge>
                                    <h4 className="fw-bold">{item.title}</h4>
                                    <p className="">{item.text}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Souvenirs
;
