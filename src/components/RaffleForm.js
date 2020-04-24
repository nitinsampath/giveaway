import React from 'react';
import DateTimePicker from 'react-datetime-picker';
import { Redirect } from "react-router-dom";

export default class RaffleForm extends React.Component {
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
        this.props.history.push("/");
    }
    
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
                    />
                </label>

                <label>
                    End Date and Time:
                    <DateTimePicker
                    value={this.state.endDate}
                    />
                </label>

                <button>Start Raffle!</button>
            </form>
        </div>
        )
    }

}