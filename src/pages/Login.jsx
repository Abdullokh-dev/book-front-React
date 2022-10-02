import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Col} from "react-bootstrap";

function Login() {
  return (
    <Form className={'d-flex justify-content-center m-4 m-md-0 me-md-4'}>
      <Col xs={12} lg={8}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Col>
    </Form>
  )
}

export default Login;