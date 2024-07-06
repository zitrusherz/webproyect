import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/Slice';
import { URLBACKEND } from '../App';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const user = useSelector(state => state.usuario.userData);
    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const trimmedUsername = username.trim();
        const trimmedPassword = password.trim();

        if (trimmedUsername === '' || trimmedPassword === '') {
            setError('El nombre de usuario y la contraseña no pueden estar vacíos');
            return;
        }

        try {
            const response = await axios.post(URLBACKEND+"accounts/login/", {
                username: trimmedUsername,
                password: trimmedPassword,
            });
            dispatch(login(trimmedUsername))
            alert('Login exitoso: ' + response.data.message);
            navigate("/");

        } catch (error) {
            setError('Usuario o contraseña incorrectos');
        }
    };

    return (
        <section className="py-5 text-white">
            <Container className="py-5">
                <Row className="mb-4 mb-lg-5">
                    <Col md={8} xl={6} className="text-center mx-auto">
                        <p className="fw-bold text-success mb-2">Iniciar sesión</p>
                        <h2 className="fw-bold">Bienvenido</h2>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Body className="text-center d-flex flex-column align-items-center">
                                <div className="bs-icon-xl bs-icon-circle bs-icon-primary shadow bs-icon my-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-person">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"></path>
                                    </svg>
                                </div>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="formUsername">
                                        <Form.Control
                                            type="text"
                                            name="username"
                                            placeholder="Nombre de usuario"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formPassword">
                                        <Form.Control
                                            type="password"
                                            name="password"
                                            placeholder="Contraseña"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </Form.Group>
                                    {error && <p className="text-danger">{error}</p>}
                                    <div className="mb-3">
                                        
                                            <Button className="btn-primary shadow d-block w-100" type="submit">
                                                Ingresar
                                            </Button>
                                        
                                    </div>
                                    <Link to="/register" className="text-decoration-none">
                                        <p className="text-muted">¿No estás registrado?</p>
                                    </Link>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Login;
