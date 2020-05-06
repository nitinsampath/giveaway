import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { loginWithGoogle } from "../actions/users";
import { logoutUser } from "../actions/users";

class Dashboard extends React.Component {
  // probably need to move the conditional render of raffles to a different component called RaffleList
  // also need to render active, past, and future giveaways based on time
  render() {
    const userLoggedIn = this.props.isLoggedIn;
    if (userLoggedIn) {
      return <Redirect to="/myAccount"></Redirect>;
    }
    let button;
    button = (
      <div>
        <button
          onClick={() => {
            this.props.logoutUser();
          }}
        >
          Logout
        </button>
        <button
          onClick={() => {
            this.props.history.push("/register");
          }}
        >
          Register
        </button>
        <GoogleLogin
          clientId="16760177323-k57r632it7kg0v50s9iasp4mr4g8b8pf.apps.googleusercontent.com"
          onSuccess={(response) => {
            // console.log("successfuk");
            // console.log(response);
            loginWithGoogle(response);
            // this.props.loginWithGoogle(response);
          }}
          onFailure={(response) => {
            console.log("failureeee");
            console.log(response);
          }}
        />
      </div>
    );

    return (
      <div>
        <h1>Dashboard</h1>
        {button}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

const mapDispatchToProps = {
  logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
