import {Routes, Route} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import {Provider} from "react-redux";
import store from "./redux/reducers/store/configureStore.jsx";
import BookInfo from "./pages/BookInfo.jsx";

function App() {
  return(
    <Provider store={store}>
      <Routes>
        <Route index path={'/'} element={<Home />}/>
        <Route path={'/login'} element={<Login />}/>
        <Route path={'/book/:bookId'} element={<BookInfo />}/>
      </Routes>
    </Provider>
  )
}

export default App;