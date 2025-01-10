import { useState } from "react"

export const ControlledForm = () => {
    const [name, setName] = useState()
    const [age, setAge] = useState()

    return (
        <form>
            <input name="name" type="text"  placeholder='type name here...' value={name} onChange={(e) => setName(e.target.value)} />
            <input name="age" type="number"  placeholder='type age here...' value={age} onChange={(e) => setAge(e.target.value)} />
            <button>submit</button> 
        </form>
      )
}