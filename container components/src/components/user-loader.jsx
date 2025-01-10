import axios from 'axios';
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import React from 'react';

const UserLoader = ({userId, children}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async() => {
            const {data} = await axios.get(`http://localhost:9090/users/${userId}`);
            setUser(data)
        })()
    }, [userId])

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

UserLoader.propTypes = {
    children: PropTypes.children,
    userId: PropTypes.number.isRequired
}

export default UserLoader