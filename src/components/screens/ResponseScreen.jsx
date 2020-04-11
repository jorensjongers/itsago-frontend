import React, { Component } from 'react'
import BackButton from '../BackButton.jsx'
import Allowed from '../../images/allowed.png'
import Warning from '../../images/warning.png'
import Prohibited from '../../images/prohibited.png'


export class ResponseScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: '',
            text: '',
            info: '',
            showInfo: false,
            loading: true
        }
        const that = this;
        console.log(API_URL + '/searchbar?text=' + this.props.item)
        fetch(window.API_URL + '/searchbar?text=' + this.props.item)
        .then(response => response.json())
        .then(data => that.setState({result: data[0].classification.toLowerCase(), 
                                     text: data[0].info,
                                     loading: false})); 
    }

    render() {

        const getIcon = (name) => {
            console.log(name)
            if (name == 'allowed')
                return Allowed
            else if (name == 'warning')
                return Warning
            else if (name == 'prohibited')
                return Prohibited
        }
        
        const warning = () => {
            if (this.state.result == 'warning')
                return "Read more"
            else
                return ''
        }

        const pictureOrName = () => {
            if (this.props.path == null)
                return (<div className='nopicture'>
                            <img className='icon' src={getIcon(this.state.result)} alt=""/>
                            <h2> {this.props.item} </h2>
                        </div>)
            else 
                return (<div className='image'>
                            <img className='icon' src={getIcon(this.state.result)} />
                            <img className='picture' src={this.props.path}/>
                        </div>)
        }

        const content = () => {
            if (this.state.showInfo) {
                return (
                    <div className='info'>
                        <BackButton  back={() => this.setState({showInfo: false})} />
                        <h1 className={this.state.result}> {this.state.result.replace(/^\w/, c => c.toUpperCase())} </h1>
                        <h5> {this.state.text} </h5>
                        <h6> {this.state.info} </h6>
                        <h6 className='link'> 
                            Still not clear? <br/>
                            Find the full regulations &nbsp;
                            <a href="https://www.brusselsairport.be/en/passengers/your-travel-planner/packing-your-bags/your-hand-baggage">here</a>
                        </h6>
                    </div>
                )
            } else {
                return (
                    <div className='result'>
                        <BackButton back={() => {
                            if (this.props.path == null)
                                this.props.changeState('manual')
                            else 
                                this.props.changeState('confirm')}}/>
                        <h1 className={this.state.result}> {this.state.result.replace(/^\w/, c => c.toUpperCase())} </h1>
                        {pictureOrName()}
                        <h5> {this.state.text} </h5>
                        <h6 className='link' onClick={() => this.setState({showInfo: true})}> {warning()} </h6>
                    </div>
                )
            }
        }

        if (this.state.loading) {
            return (<div className='response'> 
                <BackButton back={() => {
                            if (this.props.path == null)
                                this.props.changeState('manual')
                            else 
                                this.props.changeState('confirm')}}/>
                <h1> The object was not found in our database </h1>
                <button onClick={() => this.props.changeState('input')}> Check another item </button>
                <h6 className='link'> Send us your feedback </h6>
            </div>)
        } else {
            return ( 
                <div className='response'>
                    {content()}
                    <button onClick={() => this.props.changeState('input')}> Check another item </button>
                    <h6 className='link'> Send us your feedback </h6>
                </div>
            )
        }
    }
}

export default ResponseScreen