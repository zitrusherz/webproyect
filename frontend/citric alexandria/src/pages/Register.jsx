import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/Slice';
import { URLBACKEND } from '../App';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [error, setError] = useState('');
    const user = useSelector(state => state.usuario.userData);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        const trimmedUsername = username.trim();
        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();
        const trimmedPassword2 = password2.trim();
        const lowerUsername = trimmedUsername.toLowerCase();
        const lowerEmail = trimmedEmail.toLowerCase();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if (/\s/.test(lowerUsername) || /\s/.test(lowerEmail)) {
            setError('El usuario o correo no pueden contener espacios internos');
            return;
        }
    
        if (!/[a-zA-Z]/.test(lowerUsername)) {
            setError('El usuario debe contener al menos una letra');
            return;
        }
    
        if (trimmedPassword.length < 6) {
            setError('La contraseña debe tener al menos 6 caracteres');
            return;
        }
    
        if (/\s/.test(trimmedPassword)) {
            setError('La contraseña no puede contener espacios internos');
            return;
        }
    
        if (!/\d/.test(trimmedPassword)) {
            setError('La contraseña debe contener al menos un número');
            return;
        }
    
        if (!/[A-Z]/.test(trimmedPassword)) {
            setError('La contraseña debe contener al menos una mayúscula');
            return;
        }
    

    
        if (trimmedPassword !== trimmedPassword2) {
            setError('Las contraseñas no coinciden');
            return;
        }
    
        if (lowerUsername.length <= 3) {
            setError('El usuario debe tener más de 3 caracteres');
            return;
        }
    
        if (!emailRegex.test(lowerEmail)) {
            setError('El correo electrónico no es válido');
            return;
        }
    
        try {
            const response = await axios.post(URLBACKEND+"accounts/register/", {
                username: lowerUsername,
                email: lowerEmail,
                password: trimmedPassword,
            });
            
            alert('Registro exitoso: ' + response.data.message);
            dispatch(login(lowerUsername));
            navigate("/");
        } catch (error) {
            alert("salio mal")
            setError('Error al registrar el usuario');
        }
    };
    
    

    return (
        <section className="py-5 text-white">
            <Container className="py-5">
                <Row className="mb-4 mb-lg-5">
                    <Col md={8} xl={6} className="text-center mx-auto">
                        <p className="fw-bold text-success mb-2">Registro</p>
                        <h2 className="fw-bold">Crea tu cuenta</h2>
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
                                            maxLength={12}
                                            onChange={(e) => setUsername(e.target.value)}
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formEmail">
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formPassword">
                                        <Form.Control
                                            type="password"
                                            name="password"
                                            placeholder="Contraseña"
                                            value={password}
                                            maxLength={12}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formPassword2">
                                        <Form.Control
                                            type="password"
                                            name="password2"
                                            placeholder="Confirma tu contraseña"
                                            value={password2}
                                            maxLength={12}
                                            onChange={(e) => setPassword2(e.target.value)}
                                            required
                                        />
                                    </Form.Group>
                                    {error && <p className="text-danger">{error}</p>}
                                    <div className="mb-3">
                                        
                                            <Button className="btn-primary shadow d-block w-100" type="submit">
                                                
                                                    Registrarse
                                                
                                                
                                            </Button>
                                        
                                        
                                    </div>
                                    <Link to="/login" className=' text-decoration-none'>
                                        <p className="text-muted">¿Ya tienes cuenta? Inicia sesión</p>
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

export default Register;
