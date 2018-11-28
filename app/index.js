import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

  constructor(props){
      super(props)
      this.state = {
        authenticated: false,
        value: ''
    }
    this.logIn = this.logIn.bind(this)
    this.Logout = this.Logout.bind(this)
  }

  logIn(e){
      this.setState({
        authenticated: true,
        value: 'Hello Tarek'
      })
  } 

  Logout(e){
    this.setState({
      authenticated: false,
      value: 'logged out'
    })
  }

  render() {
    return (
      <div className="section has-text-centered">
        {this.state.authenticated ?
        <button onClick={ this.Logout} className="button is-warning"> Log out </button>
        : 
        <button onClick={ this.logIn} className="button is-large is-link"> Login to Google drive </button>
        }
        <p> {this.state.value} </p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
