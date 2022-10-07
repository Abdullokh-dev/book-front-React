import {useEffect} from "react";
import {connect} from "react-redux";
import {fetchBooks} from '../redux/reducers/index.jsx';
import BookImg from '../assets/rich.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Col, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function Books({ booksData, fetchBooks }) {
  useEffect(() => {
    fetchBooks()
  }, []);

  const navigate = useNavigate()

  function GoRead(i) {
    navigate(`/book/${i}`)
  }

  return(
    <>
      <Row>
        {
          booksData.books.models.map((book) => (
            <Col sm={6} lg={4} xl={3} className={'mb-4'} key={book.id}>
              <Card>
                <Card.Img variant="top" src={BookImg} />
                <Card.Body>
                  <Card.Title>{book.name}</Card.Title>
                  <Card.Text>
                    {book.description}
                  </Card.Text>
                  <Button variant="primary" onClick={() => GoRead(book.id)}>Read</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
      </Row>
    </>
  )
}

const mapStateToProps = state => {
  return {
    booksData: state.books
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBooks: () => dispatch(fetchBooks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);