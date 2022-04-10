import React, {useState} from "react";
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap'
import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'
import Input from "./Input";
import { registration } from "../action/user";
const RegistraionForm = () => {
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")
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
                            <h1>Регистрация</h1>
                            {/* <Form.Group className="mb-3" controlId="formBasicEmail">

                                <Form.Control type="text" placeholder="Есіміңізді теріңіз" />
                                <br />
                                <Form.Control type="text" placeholder="Фамилияңызды теріңіз" />
                                <br />
                                <PhoneInput placeholder="Телефоныңызды теріңіз" value={value}
                                     onChange={setValue}/>
                                <br />
                                
                            </Form.Group> */}

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Input  value={email} setValue={setEmail} type="email" placeholder="Поштаңызды теріңіз" />
                                <br />
                                <Input  value={password} setValue={setPassword} type="password" placeholder="Пароль теріңіз" /> <br />
                                {/* <Form.Control type="password" placeholder="Қайта теріңіз" />
                                <br /> */}
                                <Form.Text className="text-muted">
                                    Біз сіз жайлы ақпаратты құпия сақтаймыз
                                </Form.Text>
                            </Form.Group>
                            <Button onClick={() => registration(email, password)} variant="primary" className="login-form-button">
                                Жүйеге тіркелу
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default RegistraionForm