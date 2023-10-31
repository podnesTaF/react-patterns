import axios from 'axios';
import { useEffect, useState } from 'react'

const includeUser = (Component, userId) => {
  return (props) => {
    console.log(props)
    const [user, setUser] = useState(null);

    useEffect(() => {
        ( async () => {
            const {data} = await axios.get('http://localhost:9090/users/' + userId);
            setUser(data)
        })()
    }, [])

    return <Component {...props} user={user} />
  }
}

export default includeUser