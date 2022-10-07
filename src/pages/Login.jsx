import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Col} from "react-bootstrap";
import axios from "axios";
const url = 'http://localhost:8888/api/users/auth'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(url, {email, password})
      localStorage.setItem('token', resp.data.token)
    } catch (e) {
      if(e.response.data.code === 401) {
        alert('Email or Password is incorrect')
      } else {
        console.log(e.response)
      }
    }
  }

  return (
    <Form className={'d-flex justify-content-center m-4 m-md-0 me-md-4'} onSubmit={handleSubmit}>
      <Col xs={12} lg={8}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" autoComplete="on" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Enter
        </Button>
      </Col>
    </Form>
  )
}

export default Login;