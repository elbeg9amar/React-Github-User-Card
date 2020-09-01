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
        console.log(res.data)
      })
      .catch(err =>{
        console.log(err)
      })
  }

  componentDidUpdate() {
    
  }

  

  render(){
    return (
      <div>
        <haeder><h1>Github User Card</h1></haeder>
        <Users user={this.state.gitData}/>
      </div>
    )
  }
  
}

export default App;
