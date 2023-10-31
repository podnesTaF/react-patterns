import axios from 'axios';
import { useEffect, useState } from 'react'

const includeUpdatableUser = (Component, userId) => {
  return (props) => {
    const [initialUser, setInitialUser] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async() => {
            const response = await axios.get(`http://localhost:9090/users/${userId}`)
            setInitialUser(response.data)
            setUser(response.data)
        })()
    }, [])

    const onChangeUser = updates => {
        setUser({...user, ...updates})
    }

    const onPostUser = async () => {
        const {data} = await axios.post(`http://localhost:9090/users/${userId}`, {
            user
        });

        setInitialUser(data)
        setUser(data)
    }

    const onResetUser = () => {
        setUser(initialUser)
    }

    return <Component {...props} user={user} onChangeUser={onChangeUser} onPostUser={onPostUser} onResetUser={onResetUser} />
}
}

export default includeUpdatableUser