import React from 'react'
import axios from 'axios';
import Followers from './Followers'

class  Users extends React.Component {
    constructor(){
        super();
        this.state= {
            followers:[]
        }
    }
    componentDidMount() {
        axios.get('https://api.github.com/users/elbeg9amar/followers')
        .then(res => {
          this.setState({followers: res.data})
        })
        .catch(err =>{
          console.log(err)
        })
    }
    render() {

        return (
            <div className="user">
                <img src={this.props.user.avatar_url} width="200" height="200"alt="users picture"/>
                <p>username: {this.props.user.login}</p>
                <p>Followers: {this.props.user.followers}</p>
                <p>Following: {this.props.user.following}</p>
                <p>location: {this.props.user.location}</p>
                <p>user URL: {this.props.user.url}</p>
                {
                    this.state.followers.map((follower) => (
                      <Followers follower={follower}/>  
                    ))
                } 
            </div>
        )
    }
}


export default Users;