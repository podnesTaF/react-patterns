import axios from 'axios';
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import React from 'react';

const CurrentUser = ({children}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async() => {
            const {data} = await axios.get('http://localhost:9090/current-user');
            setUser(data)
        })()
    }, [])

  return (
   <>
    {React.Children.map(children, child => {
        if(React.isValidElement(child)) {
            return React.cloneElement(child, {user})
        }
        return child
    })}
   </>
  )
}

CurrentUser.propTypes = {
    children: PropTypes.children
}

export default CurrentUser