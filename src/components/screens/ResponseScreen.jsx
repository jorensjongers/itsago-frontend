import React, { Component } from 'react'
import BackButton from '../BackButton.jsx'
const API_URL = "http://localhost:5000";


export class ResponseScreen extends Component {
    constructor(props) {
        super(props);
        // TODO: reset to empty strings and activate API
        this.state = {
            result: '',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
            info: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
            showInfo: false
        }
        //const that = this;
        //fetch(API_URL + '/searchbar?text=' + this.props.item)
        //.then(response => response.json())
        //.then(data => that.setState({result: data[0].classification.toLowerCase(), text: data[0].info})); 
        this.state.result = this.props.item;
    }

    render() {

        const warning = () => {
            if (this.state.result == 'warning')
                return "Read more"
            else
                return ''
        }

        const pictureOrName = () => {
            if (this.props.path == null)
                return (<div className='nopicture'>
                            <img className='icon' src={"src/images/"+ this.state.result + ".png"} alt=""/>
                            {/* TODO: change to this.props.item */}
                            <h2> item name </h2>
                        </div>)
            else 
                return (<div className='image'>
                            <img className='icon' src={"src/images/"+ this.state.result + ".png"} alt=""/>
                            <img className='picture' src={this.props.path}/>
                        </div>)
        }

        const content = () => {
            if (this.state.showInfo) {
                return (
                    <div className='info'>
                        <BackButton  back={() => this.setState({showInfo: false})} />
                        <h5> {this.state.text} </h5>
                        <h6> {this.state.info} </h6>
                        <h6 className='link'> 
                            Still not clear? <br/>
                            Find the full regulations <space/>
                            <a href="https://www.brusselsairport.be/en/passengers/your-travel-planner/packing-your-bags/your-hand-baggage">here</a>
                        </h6>
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
            <div className='response'>
              <BackButton back={() => this.props.changeState('confirm')}/>
              <h1 className={this.state.result}> {this.state.result} </h1>
              {content()}
              <button onClick={() => this.props.changeState('input')}> Check another item </button>
              <h6 className='link'> Send us your feedback </h6>
            </div>
          )
    }
}

export default ResponseScreen