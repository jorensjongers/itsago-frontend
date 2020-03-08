import React from 'react';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navbar">
                <button className='navbarbutton' onClick={() => this.props.changeState('start')}> Start </button>
                <button className='navbarbutton' onClick={() => this.props.changeState('camera')}> Camera </button>
                <button className='navbarbutton' onClick={() => this.props.changeState('other')}> Other </button>
            </div>
        )
    }
}

export default Navbar;