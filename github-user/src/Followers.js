import React from 'react'


const Followers = (props) => {
    return (
        <div>
        {console.log(props.follower)}
             <img src={props.follower.avatar_url} width="200" height="200"alt="users picture"/>
                <p>username: {props.follower.login}</p>
                <p>User ID: {props.follower.id}</p>
                <p>Following: {props.follower.following_url}</p>
                <p>user URL: {props.follower.url}</p>
            
        </div>
    )
}


export default Followers