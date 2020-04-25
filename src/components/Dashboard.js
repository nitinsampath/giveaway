import React from 'react';
import {connect} from 'react-redux';


class Dashboard extends React.Component {
    

    // probably need to move the conditional render of raffles to a different component called RaffleList
    // also need to render active, past, and future giveaways based on time
    render() {
        console.log(this.props.raffles); 
        return (
            <div>
                <h1>Dashboard</h1>
                <button onClick={() => {this.props.history.push("/raffle/new")}}>Create Giveaway</button>
                <p>Active Giveaways</p>
                {this.props.raffles && 
                    this.props.raffles.map((raffle) => {
                    return (
                        <div key={raffle.id}>
                            <p>{raffle.raffleName}</p>
                            <p>{raffle.raffleDescription}</p>
                            ----------------------------
                        </div>
                        )
                    })}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        raffles: state
        
    };
};

export default connect(mapStateToProps)(Dashboard);
