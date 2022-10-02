import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Container from "react-bootstrap/Container";
import Categories from "./components/Categories.jsx";
import {Col, Row} from "react-bootstrap";
import App from "./App.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Container fluid={true} className={'p-0'}>
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
