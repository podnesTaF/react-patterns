import { useRef } from "react";
import "./App.css";
import {Input} from "./components/Input";

function App() {
  const inputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    console.log(inputRef.current.value);
  }

  return (
    <form onSubmit={submitHandler}>
      <Input ref={inputRef}/>
      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
}

export default App;
