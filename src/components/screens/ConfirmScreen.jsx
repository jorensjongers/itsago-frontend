import React, { Component } from 'react'

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
                    <img className='checkmark' src='./src/images/checkmark.png' />}
                </li>
            ));
            return <ul className='list'>{options}</ul>
        }

        return (
            <div className='confirm'>
                <h1> Your item: </h1>
                <img className='picture' src={this.props.path} />
                {itemList()}
                <button onClick={() => {
                        this.props.setItem(this.state.selectedItem); 
                        this.props.changeState('response')}
                    }> 
                  Continue 
                </button>
                <h6> item not in list? </h6>
                <h6 className='link' onClick={() => this.props.changeState('input')}> Try again </h6>

            </div>
        )
    }
}

export default ConfirmScreen
