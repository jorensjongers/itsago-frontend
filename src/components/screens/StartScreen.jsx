import React from 'react';


class StartScreen extends React.Component {
    render() {
        return (
            <div className='screen'>
                <img className='bac-logo' src='./src/images/bac_logo.png'/>
                <h1 className='placeholder'> Short explanation goes here </h1>
                <button onClick={() => this.props.changeState('input')}> Start! </button>
            </div>
        )
    }
}

export default StartScreen;