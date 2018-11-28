import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      value: ""
    };
    this.logIn = this.logIn.bind(this);
    this.Logout = this.Logout.bind(this);
  }

  logIn(e) {
    this.setState({
      authenticated: true,
      value: "Hello Tarek"
    });
  }

  Logout(e) {
    this.setState({
      authenticated: false,
      value: "logged out"
    });
  }

  render() {
    return (
      <div className="section has-text-centered">
        {this.state.authenticated ? (
          <div className='box'>
            <div className='field'>
              <div class="control has-icons-left has-icons-right">
                <input class="input" type="email" placeholder="Email" />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope" />
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-check" />
                </span>
              </div>
            </div>
            <div className='field'>
              <p class="control has-icons-left">
                <input class="input" type="password" placeholder="Password" />
                <span class="icon is-small is-left">
                  <i class="fas fa-lock" />
                </span>
              </p>
            </div>
            <button className="button is-link">
            Login
          </button>
          </div>
        ) : (
          <button onClick={this.logIn} className="button is-large is-link">
            {" "}
            Login to Google drive{" "}
          </button>
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
