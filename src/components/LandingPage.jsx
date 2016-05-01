import React from 'react';

export class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {X: 10, Y: 20, Z: 30};
        
        this.changeState = this.changeState.bind(this);
    }
    
    changeState() {
        this.setState({Y:10000});
    }
    
    render() {
        return (
            <div id="MainPage">
                <h1>HELLO WORLD!</h1>
                <h1>{this.state.X}</h1>
                <h1>{this.state.Y}</h1>
                <h1>{this.state.Z}</h1>
                <br/><br/>
                <button onClick={this.changeState}>CHANGE THE STATE</button>
            </div>
        );
    }
}