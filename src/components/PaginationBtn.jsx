import {Col, Pagination, Row} from 'react-bootstrap'

function PaginationBtn() {
  return(
    <Row>
      <Col>
        <Pagination>
          <Pagination.First />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Item>{4}</Pagination.Item>
          <Pagination.Item>{5}</Pagination.Item>
          <Pagination.Last />
        </Pagination>
      </Col>
    </Row>
  )
}

export default PaginationBtn
