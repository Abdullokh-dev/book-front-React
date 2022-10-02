import {Col, Row} from "react-bootstrap";

function Footer() {
  return(
    <Row className={'fixed-bottom'}>
      <Col>
        <footer className={'bg-dark text-light p-5 mt-4'}>
          © All rights reserved
        </footer>
      </Col>
    </Row>
  )
}

export default Footer;