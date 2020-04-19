import React from 'react';

export default class Raffle extends React.Component {


    render() {
        return (
            <div>
            <h1>Raffle/Giveaway app</h1>
               
                <form>
                    <label>Giveaway name</label>
                    <input type="text" name="option"/>
               </form>
            </div>
        )
    }
}
