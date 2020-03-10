import React from 'react';


class StartScreen extends React.Component {
    render() {
        return (
            <div className='screen'>
                <h1> Welcome to Brussels Airport luggage check! </h1>
                <img className='start-icon' src='./images/suitcase.png'/> 
                <button onClick={this.props.nextScreen}> Start </button>
            </div>
        )
    }
}

export default StartScreen;