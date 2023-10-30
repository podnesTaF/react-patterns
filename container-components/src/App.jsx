import axios from "axios"
import { BookInfo } from "./components/book-info"
import DataSource from "./components/data-source"
import { UserInfo } from "./components/user-info"
import PropTypes from 'prop-types'

const getDataFromServer = async (url) => {
  const {data} = await axios.get("http://localhost:9090" + url);
  return data
}

const getDataFromLocalStorage = (key) => {
  return localStorage.getItem(key)
}

const Message = ({msg}) => {
  return <h1>{msg}</h1>
}

Message.propTypes = {
  msg: PropTypes.string.isRequired
}

function App() {

  return (
    <>
      <DataSource getData={() => getDataFromServer('/users/3')} resourceName={"user"}>
        <UserInfo />
      </DataSource>
      <DataSource getData={() => getDataFromServer('/books/2')} resourceName={"book"}>
        <BookInfo />
      </DataSource>

      <DataSource getData={() => getDataFromLocalStorage('test')} resourceName={"msg"}>
        <Message />
      </DataSource>
    </>
  )
}

export default App
