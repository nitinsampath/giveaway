import React from 'react';
import DateTimePicker from 'react-datetime-picker';
import { connect } from 'react-redux';
import { addRaffle } from '../actions/raffles';

class RaffleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            raffleName : '',
            raffleDescription : '',
            startDate: new Date(),
            endDate: new Date()
        }
    }

    onNameChange = (e) => {
        const raffleName = e.target.value;
        this.setState(() => {
            return {
                raffleName
            };

        });
    }

    onDescriptionChange= (e) => {
        const raffleDescription = e.target.value;
        this.setState(() => {
            return {
                raffleDescription
            };

        });
    }

    onDurationChange= (e) => {
        const raffleDescription = e.target.value;
        this.setState(() => {
            return {
                raffleDescription
            };

        });
    }

    onSubmit= (e) =>{
        e.preventDefault();
        this.props.dispatch(addRaffle(this.state));   
        this.props.history.push("/");
    }

    onStartDateChange = (startDate) => this.setState({ startDate });
    onEndDateChange = (endDate) => this.setState({ endDate });
    
    render() {

        //console.log(this.props);
        return (
        <div>
            <form onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    placeholder="Giveaway Name"
                    value={this.state.raffleName}
                    onChange={this.onNameChange}
                />
                
                <input 
                    type="text"  
                    placeholder="Description"
                    value={this.state.raffleDescription}
                    onChange={this.onDescriptionChange}
                />
                <label>
                    Start Date and Time:
                    <DateTimePicker
                    value={this.state.startDate}
                    onChange={this.onStartDateChange}
                    />
                </label>

                <label>
                    End Date and Time:
                    <DateTimePicker
                    value={this.state.endDate}
                    onChange={this.onEndDateChange}
                    />
                </label>

                <button>Start Raffle!</button>
            </form>
        </div>
        )
    }

}

export default connect()(RaffleForm);