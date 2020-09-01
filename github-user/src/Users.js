import React from 'react'

const Users =(props) => {
    return (
        <div>
           <h2>
               {props.user.login}
           </h2>
        </div>
    )
}


export default Users;