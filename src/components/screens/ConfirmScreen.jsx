import React, { Component } from 'react'
import BackButton from '../BackButton.jsx'
import CheckMark from '../../images/checkmark.png'

export class ConfirmScreen extends Component {

    selectButton = (action, newState) => {
        ReactGA.event({
          category: 'Button',
          action: action
        })
        this.props.changeState(newState)
      }

    constructor(props) {
        super(props)
        console.log(this.props.items)
        this.state  = {
            notFound: false,
            selectedItem: ''
        }

        if (this.props.items[0] == "nothing found") {
            console.log(this.props.items)
            this.state.notFound = true;
        } else {
            this.state.selectedItem = this.props.items[0].name
        }
    }

    selectItem = (key) => {
        this.setState({selectedItem: key});
    }
    

    render() {
        const itemList = () => {
            let keys = this.props.items;
            if (keys.length > 3)
                keys = keys.slice(0,3);

            const options = keys.map(k => (
                <li key={k.name}
                    className='autocomplete-items'
                    id={k.name == this.state.selectedItem ? 'selected' : ''}
                    onClick={() => this.selectItem(k.name)}>  
                  {k.name} 
                </li>
            ));
            return <ul className='list'>{options}</ul>
        }

        if (this.state.notFound) {
            return ( 
            <div className='confirm'>
                <BackButton back={() => this.props.changeState('camera')}/>
                <h1> No object was detected. </h1>
                <h2> Please try again, or enter item manually. </h2>
                <button className='again'
                        onClick={() => {
                        this.props.changeState('camera')}
                    }> 
                Try again
                </button>
                <button className='continue'
                        onClick={() => {
                        this.props.changeState('manual')}
                    }> 
                Manual entry
                </button>
            </div>)
        } else {
            return (
                <div className='confirm'>
                    <BackButton back={() => this.props.changeState('camera')}/>
                    { this.props.items.length == 1 
                        ? <h1> Confirm your item </h1>
                        : <h1> Select your item </h1> 
                    }
                    <img className='picture' src={this.props.path} />
                    {itemList()}
                    <button 
                            className='again'
                            onClick={() => this.selectButton('Not found button selected', 'manual')}>
                    Not found? <br/>
                    Manual search
                    </button>
                    { (this.state.selectedItem != '')
                    ? <button className='continue'
                                onClick={() => {
                                this.props.setItem(this.state.selectedItem); 
                                this.selectButton('Continue button selected', 'response')}
                            }> 
                        { this.props.items.length == 1 
                            ? 'Confirm'
                            : 'Continue'
                        }
                        </button>
                    : <button id='disabled' className='continue'> 
                    Continue 
                    </button> }

                </div>
            )
        }
    }
}

export default ConfirmScreen
