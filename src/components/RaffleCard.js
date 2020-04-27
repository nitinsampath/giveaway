import React from "react";
import { connect } from "react-redux";
import { getRaffles } from "../actions/raffles";

class RaffleCard extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.raffleName}</p>
        <p>{this.props.raffleDescription}</p>
        ----------------------------
      </div>
    );
  }
}
export default RaffleCard;
