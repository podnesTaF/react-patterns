import { useCallback, useRef, useState } from "react";


function App() {
    const [show, setShow] = useState(false)

const realRef = useRef()
 const inputRef = useCallback((input) => {
    realRef.current = input
    input?.focus()
 },[])

 return (
    <>
        <button onClick={() => setShow(!show)}>Switch</button>
        <div>
        {show && <input type="text" ref={inputRef} />}
        </div>
    </>
 )
}

export default App;
