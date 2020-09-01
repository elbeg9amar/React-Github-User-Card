import React from 'react';
import axios from 'axios';
import Users from './Users'

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gitData: []
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/elbeg9amar')
      .then(res => {
        this.setState({gitData: res.data})
      })
      .catch(err =>{
        console.log(err)
      })
  }

  componentDidMount() {
    
  }

  render(){
    return (
      <div>
        <Users user={this.state.gitData}/>
      </div>
    )
  }
  
}

export default App;
