import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import {Link} from 'react-router-dom'
import {Row} from 'react-bootstrap'

function Header() {
  return (
    <Row className={'fixed-top'}>
      <Navbar bg="dark" expand="md" variant={'dark'}>
      <Container fluid className={'m-2'}>
        <Navbar.Brand className={'me-4'}>
          <Link to={'/'} style={{textDecoration: "none", color: "white"}}>Books</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', color: "white" }}
            navbarScroll
          >
            <Link to={'/login'} style={{
              textDecoration: "none",
              color: "white",
              marginRight: '10px'
            }}>
              Login
            </Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Row>
  );
}

export default Header
