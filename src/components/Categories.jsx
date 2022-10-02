import {Col, ListGroup} from "react-bootstrap";

function Categories() {
  return(
    <Col xs={12} md={2}>
      <ListGroup as="ul">
        <ListGroup.Item as="li" active>
          Klassika
        </ListGroup.Item>
        <ListGroup.Item as="li">Detektiv</ListGroup.Item>
        <ListGroup.Item as="li">
          Fantastika
        </ListGroup.Item>
        <ListGroup.Item as="li">Romantik</ListGroup.Item>
      </ListGroup>
    </Col>
  )
}

export default Categories;
