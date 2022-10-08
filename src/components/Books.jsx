import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchBooks} from '../redux/reducers/index.jsx'
import BookImg from '../assets/rich.png'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import {Col, Row} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

function Books() {
  const booksData = useSelector(state => state.books)
  const fetch = useDispatch()

  useEffect(() => {
    fetch(fetchBooks())
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

export default Books
