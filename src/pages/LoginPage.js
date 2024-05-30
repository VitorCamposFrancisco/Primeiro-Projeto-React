import { Button, Card, Col, Container, Form, Row, Alert } from "react-bootstrap";
import '../Styles/custom.css';
import React, { useState } from 'react';
import axios from "axios";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);


    let [mudar, setMudar] = useState({
        "type": "password",
        "icon": "Mostrar senha"
    });
    function mudarSenha() {
        if (mudar.type) {
            setMudar({
                "type": "",
                "icon": "Esconder senha"
            })
        } else {
            setMudar({
                "type": "password",
                "icon": "Mostrar senha"
            })
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();

        let response = await axios.post('http://143.198.156.185/api/auth/login', {
            "email": email,
            "password": password
        }).then(function (value) {
            setSuccess(`Bem vindo de volta, ${value.data.user.name}!`);
            setError(null);
            window.location="http://localhost:3000/";

        })
            .catch(function (value) {
                console.log(value);
                setError("Email ou senha inválidos!");
                setSuccess(null);
            });
    }
    return (
        <div>
            <Container className="mt-5">
                <Card className="shadow-lg  bg-body-light rounded position-absolute top-50 start-50 translate-middle login">
                    <Card.Header className="">
                        <Card.Title className="text-danger text-center fw-bolder letraLogin">FAÇA SEU LOGIN</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Form.Group as={Col} sm={12} md={12} lg={12} controlId="formBasicEmail">
                                    <Form.Label >Email:</Form.Label>
                                    <Form.Control type="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formBasicPassword">
                                    <Form.Label className="mt-4">Senha:</Form.Label>
                                    <div class="input-group mb-4">
                                        <Form.Control type={mudar.type} placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                                        <button className="btn btn-outline-danger" type="button" onClick={mudarSenha}>{mudar.icon}</button>
                                    </div>
                                </Form.Group>
                            </Row>

                            {error && <Alert variant="danger">{error}</Alert>}
                            {success && <Alert variant="success">{success}</Alert>}

                            <div class="d-grid gap-2 mt-2">
                                <Button variant="danger" type="submit">Login</Button>
                            </div>
                            <hr className="mt-4 border-black border-opacity-75"></hr>
                            <p className="mt-4  text-body-tertiary text-center ">Não possui uma conta?</p>
                            <div class="linnk">
                                <a className=" text-center mt-1 text-decoration-none " href="/cadastro">Criar uma conta</a>
                            </div>
                        </Form>

                    </Card.Body>
                </Card>
            </Container >
        </div>
    )
}

export default LoginPage;