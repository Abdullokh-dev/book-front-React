import {Col, ListGroup} from "react-bootstrap";

function Categories() {
  return(
    <Col xs={12} md={2}>
      <ListGroup as="ul">
        <ListGroup.Item as="li" active>
          Classic
        </ListGroup.Item>
        <ListGroup.Item as="li">Detective</ListGroup.Item>
        <ListGroup.Item as="li">
          Fantastic
        </ListGroup.Item>
        <ListGroup.Item as="li">Romantic</ListGroup.Item>
      </ListGroup>
    </Col>
  )
}

export default Categories;
