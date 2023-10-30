import { LargeBookListItem } from "./components/books/LargeListItems";
import {books} from './data/books'
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <Modal>
        <LargeBookListItem book={books[0]} />
      </Modal>
    </>
  );
}

export default App;
