import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Col, Row} from "react-bootstrap";
import BookImg from '../assets/Otkan-kunlar.jpg'

function Books() {
  return(
    <>
      <Row>
        <Col sm={6} lg={4} xl={3} className={'mb-4'}>
          <Card>
            <Card.Img variant="top" src={BookImg} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
              </Card.Text>
              <Button variant="primary">Read</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Books;