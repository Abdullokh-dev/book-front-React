import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {fetchBook} from "../redux/reducers/index.jsx";
import {useSelector, useDispatch} from "react-redux";

function BookInfo() {
  const { bookId } = useParams();
  const book = useSelector(state => state.bookId.book)
  const fetch = useDispatch()

  useEffect(() => {
    fetch(fetchBook(bookId))
  }, []);

  return(
    <div>
      <h1> {book.name} </h1>

      <p>
        {book.text}
      </p>
    </div>
  )
}

export default BookInfo