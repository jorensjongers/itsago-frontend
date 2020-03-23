import React, { Component } from 'react'

export class ResponseScreen extends Component {
    constructor() {
        super();
        this.state = {
            result: '',
            text: '',
            info: '',
            showInfo: false
        }
    }
    componentWillMount() {
        const query = this.props.item;
        /* query backend for result */
        const res = 'Warning'
        const txt = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        const info = 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        this.setState({result: res, text: txt, info: info})
        console.log(res)
    }
    
    render() {
        const warning = () => {
            if (this.state.result == 'Warning')
                return "More info"
            else
                return ''
        }

        const content = () => {
            if (this.state.showInfo) {
                return (
                    <div className='info'>
                        <h5> {this.state.text} </h5>
                        <h6> {this.state.info} </h6>
                    </div>
                )
            } else {
                return (
                    <div>
                        <img className='picture' src={this.props.path}/>
                        <h5> {this.state.text} </h5>
                        <h6 className='link' onClick={() => this.setState({showInfo: true})}> {warning()} </h6>
                    </div>
                )
            }
        }
        return ( 
            <div>
              <h1 className={this.state.result}> {this.state.result} </h1>
              {content()}
              <button onClick={() => this.props.changeState('input')}> Check another item </button>
            </div>
          )
    }
}

export default ResponseScreen