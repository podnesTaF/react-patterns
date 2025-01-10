import axios from "axios"
import { useEffect, useState } from "react"

export const useResource = (resourceUrl) => {
    const [resource, setResource] = useState(null)

    useEffect(() => {
        (async () => {
            const {data} = await axios.get('http://localhost:9090' + resourceUrl)
            setResource(data)
        })()
    }, [resourceUrl])


    return resource;
}   