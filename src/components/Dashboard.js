import React from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions/users";

class Dashboard extends React.Component {
  // probably need to move the conditional render of raffles to a different component called RaffleList
  // also need to render active, past, and future giveaways based on time
  render() {
    const userLoggedIn = this.props.isLoggedIn;
    let button;
    if (userLoggedIn) {
      button = (
        <button
          onClick={() => {
            this.props.logoutUser();
          }}
        >
          Logout
        </button>
      );
    } else {
      button = (
        <button
          onClick={() => {
            this.props.history.push("/register");
          }}
        >
          Register
        </button>
      );
    }
    return (
      <div>
        <h1>Dashboard</h1>
        <button
          onClick={() => {
            this.props.history.push("/raffle/new");
          }}
        >
          Create Giveaway
        </button>
        <button
          onClick={() => {
            this.props.history.push("/raffles");
          }}
        >
          Active Giveaways
        </button>
        {button}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  };
};

const mapDispatchToProps = {
  logoutUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
