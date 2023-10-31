import axios from 'axios';
import React, { useEffect, useState } from 'react'

const cappitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

const includeUpdatableResource = (Component, resourceUrl, resourceName) => {
    return (props) => {
        const [initialResource, setInitialResource] = useState(null);
        const [resource, setResource] = useState(null);
    
        useEffect(() => {
            (async() => {
                const response = await axios.get(`http://localhost:9090${resourceUrl}`)
                setInitialResource(response.data)
                setResource(response.data)
            })()
        }, [])
    
        const onChange = updates => {
            setResource({...resource, ...updates})
        }
    
        const onPost = async () => {
            const {data} = await axios.post(`http://localhost:9090${resourceUrl}`, {
                [resourceName]: resource
            });
    
            setInitialResource(data)
            setResource(data)
        }
    
        const onReset = () => {
            setResource(initialResource)
        }

        const resourceProps = {
            [resourceName]: resource,
            [`onChange${cappitalize(resourceName)}`]: onChange,
            [`onPost${cappitalize(resourceName)}`]: onPost,
            [`onReset${cappitalize(resourceName)}`]: onReset
        }
    
        return <Component {...props} {...resourceProps} />
    }
}

export default includeUpdatableResource