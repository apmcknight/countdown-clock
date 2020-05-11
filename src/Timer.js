import React from 'react';
import './App.css';

function Timer() {

    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }
    
    const {count} = this.state
    return (
        <div className="Timer">
            <h1>Current Count: {count}</h1>
        </div>
    );
}

export default Timer;