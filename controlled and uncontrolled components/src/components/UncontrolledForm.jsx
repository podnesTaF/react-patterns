import React from 'react'

const UncontrolledForm = () => {

    const nameRef = React.useRef();
    const ageRef = React.useRef();

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(nameRef.current.value)
        console.log(ageRef.current.value)
    }

  return (
    <form onSubmit={submitHandler}>
        <input name="name" type="text"  placeholder='type name here...' ref={nameRef} />
        <input name="age" type="number"  placeholder='type age here...' ref={ageRef} />
        <button type='submit'>submit</button> 
    </form>
  )
}

export default UncontrolledForm