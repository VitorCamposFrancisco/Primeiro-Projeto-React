import { Button, Card, Col, Container, Form, Row , Alert} from "react-bootstrap";
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

    async function handleSubmit(e){
        e.preventDefault();

       let response =  await axios.post(`http://143.198.156.185/api/auth/login`, {
        "email" : email,
        "password" : password
       }).then(function (value) {
            setSuccess(`Seja bem vindo, ${value.data.user.name}!`);
            setError(null);
        })  .catch(function (value) {
          setError(value.response.data.error);
          setSuccess(null);
        });
    }
    return (
        <Container className="mt-5">
            <Card className="shadow-lg  bg-body-tertiary mb-5 rounded">
                <Card.Header className="bg-danger">
                    <Card.Title className="text-light">FAÇA SEU LOGIN</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Form.Group as={Col} sm={12} md={12} lg={6} controlId="formBasicEmail">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control type="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formBasicPassword">
                                <Form.Label >Senha:</Form.Label>
                                <div class="input-group mb-3">
                                    <Form.Control type={mudar.type} placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                    <button className="btn btn-outline-danger" type="button" onClick={mudarSenha}>{mudar.icon}</button>
                                </div>
                            </Form.Group>
                        </Row>
                    </Form>
                </Card.Body>
                <Card.Footer >
                    {error && <Alert variant="danger">{error}</Alert>}
                    {success && <Alert variant="success">{success}</Alert>}
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <Button variant="outline-danger" type="submit">Login</Button>
                    </div>
                </Card.Footer>
            </Card>
        </Container >
    )
}

export default LoginPage;