import {Col, ListGroup} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {fetchBooks, fetchCategories} from '../redux/reducers/index.jsx'
import {useEffect} from 'react'

function Categories() {
  const categoriesData = useSelector(state => state.categories)
  const fetch = useDispatch()

  useEffect(() => {
    fetch(fetchCategories())
  }, []);

  function fetchBooksByCategory(i) {
    fetch(fetchBooks(i))
  }

  return(
    <Col xs={12} md={2}>
      <ListGroup as="ul">
        {
          categoriesData.categories.models.map((category) => (
            <ListGroup.Item action variant="light" key={category.id} onClick={() => fetchBooksByCategory(category.id)}>
              {category.name}
            </ListGroup.Item>
          ))
        }
      </ListGroup>
    </Col>
  )
}

export default Categories
