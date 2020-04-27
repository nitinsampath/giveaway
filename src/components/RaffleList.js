import React from "react";
import { connect } from "react-redux";
import { getRaffles } from "../actions/raffles";
import RaffleCard from "./RaffleCard";

class RaffleList extends React.Component {
  componentDidMount() {
    this.props.getRaffles();
  }
  render() {
    // if state is loading then place spinner, if not place raffleList
    if (this.props.loading) {
      return <div>Loading.....</div>;
    }
    // return <div>{this.props.data.length}</div>;
    
    return this.props.data.map((raffle) => {
      // need to pass in key to child component
      return (
        <RaffleCard
          key={raffle.id}
          raffleName={raffle.raffleName}
          raffleDescription={raffle.raffleDescription}
        ></RaffleCard>
      );
    });
  }
}

const mapStateToProps = state => ({
  data: state.raffles,
  loading: state.isLoading
});

const mapDispatchToProps = {
  getRaffles
};

export default connect(mapStateToProps, mapDispatchToProps)(RaffleList);
