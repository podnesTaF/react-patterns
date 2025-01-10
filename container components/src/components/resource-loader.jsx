import axios from 'axios';
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import React from 'react';

const ResourceLoader = ({resourceUrl, resourceName, children}) => {
    const [resource, setResource] = useState(null);

    useEffect(() => {
        (async() => {
            const {data} = await axios.get("http://localhost:9090" + resourceUrl);
            setResource(data)
        })()
    }, [resourceUrl])

  return (
   <>
    {React.Children.map(children, child => {
        if(React.isValidElement(child)) {
            return React.cloneElement(child, {[resourceName]: resource})
        }
        return child
    })}
   </>
  )
}

ResourceLoader.propTypes = {
    children: PropTypes.children,
    resourceName: PropTypes.string,
    resourceUrl: PropTypes.string
}

export default ResourceLoader