import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { logoutUser, getUserData } from "../actions/users.js";

//TODO: ADD loading actions to state for conditional rendering
//do all datafetching in this component
class MyAccount extends React.Component {
  componentDidMount() {
    console.log("checking...");
    if (
      this.props.isLoggedIn &&
      !this.props.isLoggingIn &&
      !this.props.isUserDataFetched
    ) {
      console.log("starting....");
      this.props.getUserData();
    }
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.isLoggedIn &&
      !this.props.isLoggingIn &&
      !this.props.isUserDataFetched
    ) {
      console.log("starting....");
      this.props.getUserData();
    }
  }
  render() {
    if (!this.props.isLoggedIn) {
      return <Redirect to="/"></Redirect>;
    }
    if (!this.props.isUserDataFetched) {
      return <div>Loading.....</div>;
    } else {
      return (
        <div>
          {this.props.displayName}
          <button
            onClick={() => {
              this.props.logoutUser();
            }}
          >
            Logout
          </button>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  isLoggingIn: state.isLoggingIn,
  isLoggedIn: state.isLoggedIn,
  isUserDataFetched: state.isUserDataFetched,
  displayName: state.displayName,
});
const mapDispatchToProps = {
  logoutUser,
  getUserData,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);
