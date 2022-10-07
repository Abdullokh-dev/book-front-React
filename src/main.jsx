import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import './index.css'
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Categories from "./components/Categories.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Container fluid={true}>
        {/* Main Row */}
        <Header />
        <Row className={'mt-2 p-3'}>
          <Categories/>
          {/* Content */}
          <Col xs={12} md={10} className={'mt-4 mt-md-0'}>
            <App/>
          </Col>
        </Row>
        <Footer/>
      </Container>
    </BrowserRouter>
  </React.StrictMode>
)
