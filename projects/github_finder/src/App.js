import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import Search from "./components/Search";
import Alert from "./components/Alert";

import React, { Component } from 'react'

export class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       loading: false,
       users: [],
       error: null
    }
    }
    
    SearchUsers =(keyword) =>
    {
      this.setState({ loading: true });
      setTimeout(() => {
        fetch("https://api.github.com/search/users?q=" + keyword)
          .then((response) => response.json())
          .then((data) => this.setState({ users: data.items, loading: false }));
      }, 2000);
    }

    ClearUsers = () =>
    {
      this.setState(
        {
          users: []
        }
      )
    }  

    ErrorControls = (msg, type) =>
    {
      this.setState(
        { error: { msg: msg, type: type } },
      );
      setTimeout(() => {
        this.setState({error: null})
      }, 3000);
    }
  render() {
  return (
    <div>
      <Navbar />
      <Search 
        SearchUsers={this.SearchUsers} 
        ClearUsers={this.ClearUsers} 
        ShowClearButton={this.state.users.length > 0 ? true:false}
        ErrorControls={this.ErrorControls}
      />
      <Alert error={this.state.error}/>
      <div className="container mt-5">
        <UserList users={this.state.users} loading={this.state.loading} />
      </div>
    </div>
  );
  }
}




export default App;
 