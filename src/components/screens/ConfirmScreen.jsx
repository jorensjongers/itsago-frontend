import React, { Component } from 'react'
import BackButton from '../BackButton.jsx'
import CheckMark from '../../images/checkmark.png'

export class ConfirmScreen extends Component {

    constructor(props) {
        super(props)
        this.state  = {
            selectedItem: this.props.items[0].name
        }
    }

    selectItem = (key) => {
        this.setState({selectedItem: key});
    }
    

    render() {
        const itemList = () => {
            const keys = this.props.items;
            if (keys.length > 3)
                keys = keys.slice(0,3);

            const options = keys.map(k => (
                <li key={k.name}
                    className='autocomplete-items'
                    onClick={() => this.selectItem(k.name)}>  
                  {k.name} 
                  {k.name == this.state.selectedItem &&
                    <img className='checkmark' src={CheckMark} />}
                </li>
            ));
            return <ul className='list'>{options}</ul>
        }

        return (
            <div className='confirm'>
                <BackButton back={() => this.props.changeState('camera')}/>
                <h1> Your item </h1>
                <img className='picture' src={this.props.path} />
                {itemList()}
                <button 
                        className='again'
                        onClick={() => {this.props.changeState('camera')}}>
                  Not found? <br/>
                  Try again
                </button>
                <button className='continue'
                        onClick={() => {
                        this.props.setItem(this.state.selectedItem); 
                        this.props.changeState('response')}
                    }> 
                  Continue 
                </button>

            </div>
        )
    }
}

export default ConfirmScreen
