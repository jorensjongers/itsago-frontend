import React, { Component } from 'react'
import BackButton from '../BackButton.jsx'
import Allowed from '../../images/allowed.png'
import Warning from '../../images/warning.png'
import Prohibited from '../../images/prohibited.png'
import Happy from '../../images/happy.png'
import Sad from '../../images/sad.png'


export class ResponseScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: '',
            text: '',
            info: '',
            showInfo: false,
            loading: true,
            nothingFound: false,
            feedbackSent: false,
            item: this.props.item 
        }
        const that = this;
        fetch(window.API_URL + '/searchbar?text=' + this.props.item)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                that.setState({result: data[0].classification.toLowerCase(), 
                                     text: data[0].text,
                                     info: data[0].info,
                                     loading: false});
            } else {
                that.setState({
                    nothingFound: true,
                    loading: false
                });
            }
        })
    }

    sendItem = (item) => {
        fetch(window.API_URL + '/suggest_item?item=' + item);
        this.setState({feedbackSent: true});
    }

    handleChange = (event) => {
        this.setState({item: event.target.value});
    }

    render() {

        const itemInput = () => {
            if (this.state.feedbackSent) {
                return <h3> Thank you! </h3>
            } else {
                return (
                    <div className='response'>
                        <input type="text" 
                               value={this.state.item || ''}
                               onChange={this.handleChange}/>
                        <button className='send' onClick={() => this.sendItem(this.state.item)}> Send </button>  
                    </div>
                )
            }
        }
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
            if (this.state.result == 'warning' || this.state.result == 'prohibited')
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
            return (
                <div>
                    <h1> Loading... </h1>
                </div>
            )
            
        } else {
            if (this.state.nothingFound) {
                return (<div className='response'> 
                <BackButton back={() => {
                            if (this.props.path == null)
                                this.props.changeState('manual')
                            else 
                                this.props.changeState('confirm')}}/>
                <h1> Item not found in our database.</h1>
                <h2> Please enter the item you wanted to check below, we'll add it in the future. </h2>
                {itemInput()}
                <button onClick={() => this.props.changeState('input')}> Check another item </button>
                <Feedback changeState={(next) => this.props.changeState(next)}/>
            </div>)
            } else {
                return ( 
                    <div className='response'>
                        {content()}
                        <button onClick={() => this.props.changeState('input')}> Check another item </button>
                        <Feedback changeState={(next) => this.props.changeState(next)}/>
                    </div>
                )
            }
        }
    }
}


class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feedBackSent: false
        };
    }

    sendPositiveFeedback = () => {
        fetch(window.API_URL + "/feedback/happy");
        this.setState({feedBackSent: true});
    }

    sendNegativeFeedback = () => {
        fetch(window.API_URL + "/feedback/sad");
        this.setState({feedBackSent: true});
        this.props.changeState('feedback');
    }

    render() {
        if (this.state.feedBackSent) {
            return (
                <div className='feedback'>
                    <h6> Thank you! </h6>
                </div>
            )
        } else {
            return (
                <div className='feedback'>
                    <img id='happy' src={Happy} onClick={this.sendPositiveFeedback}/>
                    <img id='sad' src= {Sad} onClick={this.sendNegativeFeedback}/>
                </div>
            )
        }
    }
}


export default ResponseScreen