import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import directory from '../assets/img/directory';

const ContactSection = () => {
    return (
        <section className="py-5">
            <Container>
                <Row className="mb-5">
                    <Col md={8} xl={6} className="text-center mx-auto">
                        <h2 className="fw-bold text-success mb-2">Contacto</h2>
                        <h4 className="fw-bold text-info">Escríbenos</h4>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Col md={6} xl={4}>
                        <Form className="p-3 p-xl-4" method="/">
                            <Form.Group className="mb-3">
                                <Form.Control type="text" id="name-1" name="name" placeholder="Nombre" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="email" id="email-1" name="email" placeholder="Correo Electrónico" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control as="textarea" id="message-1" name="message" rows="6" placeholder="Mensaje" />
                            </Form.Group>
                            <Button className="shadow d-block w-100" type="submit">Enviar</Button>
                        </Form>
                    </Col>
                    <Col md={4} xl={4} className="d-flex justify-content-center justify-content-xl-start">
                        <div className="d-flex flex-wrap flex-md-column justify-content-md-start align-items-md-start h-100">
                            <ContactInfo icon={directory.contact1} title="Teléfono" info="+123456789" />
                            <ContactInfo icon={directory.contact2} title="Correo" info="info@ejemplo.com" />
                            <ContactInfo icon={directory.contact3} title="Ubicación" info="Calle Ejemplo 12" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

const ContactInfo = ({ icon, title, info }) => {
    return (
        <div className="d-flex align-items-center p-3 gap-3">
            <div className="bs-icon-md bs-icon-circle bs-icon-primary shadow d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon bs-icon-md bg-primary rounded-5 p-2">
                <img src={icon} alt="icon" height={"40px"} className='' />
            </div>
            <div className="px-2 text-white">
                <h6 className="fw-bold mb-0">{title}</h6>
                <p className="d mb-0">{info}</p>
            </div>
        </div>
    );
};

const NewsletterSection = () => {
    return (
        <section className="py-5 text-white">
            <Container>
                <div className="bg-dark border rounded border-dark d-flex flex-column justify-content-between align-items-center flex-lg-row p-4 p-lg-5">
                    <div className="text-center text-lg-start py-3 py-lg-1">
                        <h2 className="fw-bold mb-2">Suscríbete a nuestro boletín</h2>
                        <p className="mb-0">Para informacion de primera mano.</p>
                    </div>
                    <Form className="d-flex justify-content-center flex-wrap flex-lg-nowrap" onSubmit={1}>
                        <Form.Group className="my-2">
                            <Form.Control className="border rounded-pill shadow-sm" type="email" name="email" placeholder="Tu Correo Electrónico" />
                        </Form.Group>
                        <Button className="btn btn-primary shadow ms-2 my-2" type="submit">Suscribirse</Button>
                    </Form>
                </div>
            </Container>
        </section>
    );
};

const Contact = () => {
    return (
        <>
            <ContactSection />
            <NewsletterSection />
        </>
    );
};

export default Contact;
