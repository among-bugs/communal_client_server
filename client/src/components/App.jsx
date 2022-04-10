import React, {Component} from "react";
import Button from "./Button";
import LoginForm from "./LoginForm"
import RegistraionForm from "./RegistrationForm";
import { Container, Row, Col, Navbar } from "react-bootstrap"
import { BrowserRouter, Route, Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.css"
import NavigationBar from "./Navigationbar";


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <NavigationBar/>
        <Routes>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/registration" element={<RegistraionForm/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;