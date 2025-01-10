import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import React from 'react';

const DataSource = ({getData = async () => {}, resourceName, children}) => {
    const [resource, setResource] = useState(null);

    useEffect(() => {
        (async() => {
            const data = await getData()
            setResource(data)
        })()
    }, [getData])

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

DataSource.propTypes = {
    children: PropTypes.children,
    resourceName: PropTypes.string,
    getData: PropTypes.func
}

export default DataSource