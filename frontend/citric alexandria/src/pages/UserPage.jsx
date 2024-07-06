import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';
import { URLBACKEND } from '../App';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout} from '../redux/Slice';
import { useNavigate } from 'react-router-dom';
function UserPage() {
    const [username, setUsername] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newUsername, setNewUsername] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validateUpdateInputs = () => {
        const trimmedUsername = username.trim();
        const trimmedCurrentPassword = currentPassword.trim();
        const trimmedNewUsername = newUsername.trim();
        const trimmedNewEmail = newEmail.trim();
        const trimmedNewPassword = newPassword.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (/\s/.test(trimmedUsername) || /\s/.test(trimmedNewEmail)) {
            setError('El usuario o correo no pueden contener espacios internos');
            return false;
        }

        if (!/[a-zA-Z]/.test(trimmedUsername)) {
            setError('El usuario debe contener al menos una letra');
            return false;
        }

        if (trimmedCurrentPassword.length < 6) {
            setError('La contraseña actual debe tener al menos 6 caracteres');
            return false;
        }

        if (/\s/.test(trimmedCurrentPassword)) {
            setError('La contraseña actual no puede contener espacios internos');
            return false;
        }

        if (newPassword && trimmedNewPassword.length < 6) {
            setError('La nueva contraseña debe tener al menos 6 caracteres');
            return false;
        }

        if (newPassword && /\s/.test(trimmedNewPassword)) {
            setError('La nueva contraseña no puede contener espacios internos');
            return false;
        }

        if (newPassword && !/\d/.test(trimmedNewPassword)) {
            setError('La nueva contraseña debe contener al menos un número');
            return false;
        }

        if (newPassword && !/[A-Z]/.test(trimmedNewPassword)) {
            setError('La nueva contraseña debe contener al menos una mayúscula');
            return false;
        }

        if (newUsername && newUsername.length <= 3) {
            setError('El nuevo usuario debe tener más de 3 caracteres');
            return false;
        }

        if (newEmail && !emailRegex.test(trimmedNewEmail)) {
            setError('El correo electrónico no es válido');
            return false;
        }

        setError('');
        return true;
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        if (!validateUpdateInputs()) {
            return;
        }

        try {
            const response = await axios.put(`${URLBACKEND}/accounts/update_user/`, {
                username: username.trim(),
                current_password: currentPassword.trim(),
                new_username: newUsername.trim() || undefined, 
                new_email: newEmail.trim() || undefined,
                new_password: newPassword.trim() || undefined
            });
            setMessage(response.data.message);
            setError('');
            dispatch(login(newUsername));
            navigate("/");
        } catch (err) {
            setError(err.response.data.message || 'Error updating user');
            setMessage('');
        }
    };

    const handleDelete = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.delete(`${URLBACKEND}/accounts/delete_user/`, {
                data: {
                    username: username.trim()
                }
            });
            setMessage(response.data.message);
            setError('');
            dispatch(logout());
            navigate("/");
        } catch (err) {
            setError(err.response.data.message || 'Error deleting user');
            setMessage('');
        }
    };

    return (
        <Container>
            <Row className="justify-content-md-center mt-5 text-white">
                <Col md={6}>
                    <h2>Actualizar datos</h2>
                    {message && <Alert variant="success">{message}</Alert>}
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleUpdate}>
                        <Form.Group controlId="username">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Introduce tu usuario"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="currentPassword">
                            <Form.Label>Contraseña actual</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Contraseña actual"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="newUsername">
                            <Form.Label>Nuevo usuario</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Introduce nuevo usuario"
                                value={newUsername}
                                onChange={(e) => setNewUsername(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="newEmail">
                            <Form.Label>Nuevo Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Nuevo email"
                                value={newEmail}
                                onChange={(e) => setNewEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="newPassword">
                            <Form.Label>Nueva contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Nueva contraseña"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className='mt-3'>
                            Actualizar
                        </Button>
                    </Form>
                </Col>
            </Row>
            <Row className="justify-content-md-center mt-5 text-white">
                <Col md={6}>
                    <h2>Borrar usuario</h2>
                    <Form onSubmit={handleDelete}>
                        <Form.Group controlId="deleteUsername">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Usuario"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Button variant="danger" type="submit" className='mt-3'>
                            Borrar
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default UserPage;
