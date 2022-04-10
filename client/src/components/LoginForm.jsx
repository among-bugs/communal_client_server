import React, { useState } from "react"

import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { login } from "../action/user"
import Input from "./Input"

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    return (
        <div>
            <Container>
                <Row className="girl my-form">
                    <Col lg={6} className="image-to-center">
                        <Image className="img" 
                        src="https://besthqwallpapers.com/Uploads/23-7-2021/170979/thumb2-linux-mint-mate-blue-logo-4k-blue-neon-lights-linux-creative.jpg" />
                    </Col>
                    <Col lg={6} className="form-column">
                        <Form className="login-form">
                        <h1>Авторизация</h1>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Пошта</Form.Label>
                                <br />
                                <Input value={email} setValue={setEmail} type='email' placeholder='Поштаны теріңіз'/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Құпия сөз</Form.Label>
                                <br />
                                <Input value={password} setValue={setPassword} type='password' placeholder='Құпия сөзді теріңіз'/>
                            </Form.Group>

                            <Button variant="primary" onClick={() => {
                                dispatch(login(email, password))
                            }} className="login-form-button">
                                Кіру
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LoginForm