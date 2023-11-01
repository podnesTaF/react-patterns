import axios from "axios"
import { useEffect, useState } from "react"

export const useCurrentUser = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        (async () => {
            const {data} = await axios.get('http://localhost:9090/current-user')
            setUser(data)
        })()
    }, [])


    return user;
}