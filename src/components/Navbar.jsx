import React from 'react';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {activeScreen: this.props.activeView};
    }

    componentWillReceiveProps(props) {
        this.setState({activeScreen: props.activeView})
      }

    render() {
        return (
            <div className="navbar">
                <button 
                    className={(this.state.activeScreen === "start") ? "active" : ""} 
                    onClick={() => this.props.changeState('start')}> 
                    Start 
                </button>
                <button 
                    className={(this.state.activeScreen === "camera") ? "active" : ""} 
                    onClick={() => this.props.changeState('camera')}> 
                    Camera
                </button>
                <button 
                    className={(this.state.activeScreen === "other") ? "active" : ""} 
                    onClick={() => this.props.changeState('other')}> 
                    Other
                </button>
            </div>
        )
    }
}

export default Navbar;