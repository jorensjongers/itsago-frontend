import React, { Component } from 'react'
const API_URL = "http://localhost:5000";

export class ResponseScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: '',
            text: '',
            info: '',
            showInfo: false
        }
        const that = this;
        fetch(API_URL + '/searchbar?text=' + this.props.item)
        .then(response => response.json())
        .then(data => that.setState({result: data[0].classification.toLowerCase(), text: data[0].info}));  
    }

    render() {
        const warning = () => {
            if (this.state.result == 'warning')
                return "More info"
            else
                return ''
        }

        const pictureOrName = () => {
            if (this.props.path == null)
                return <h2 className='placeholder'> {this.props.item} </h2>
            else 
                return <img className='picture' src={this.props.path}/>
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
                    <div className='result'>
                        {pictureOrName()}
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