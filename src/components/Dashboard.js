import React from "react";
import { connect } from "react-redux";
function mapStateToProps(state) {
  return {
    state: state
  };
}
class Dashboard extends React.Component {
  render() {
    return <div>Dashboard</div>;
  }
}

export default connect(mapStateToProps)(Dashboard);
