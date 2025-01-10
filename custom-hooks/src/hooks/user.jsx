import axios from "axios"
import { useEffect, useState } from "react"

export const useUser = (userId) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        (async () => {
            const {data} = await axios.get('http://localhost:9090/users/' + userId)
            setUser(data)
        })()
    }, [userId])


    return user;
}   