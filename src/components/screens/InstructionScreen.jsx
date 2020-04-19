import React, { Component } from 'react'
import CameraIcon from '../../images/camera_icon.png'
import Target from '../../images/target.png'
import Check from '../../images/check.png'
import Allowed from '../../images/allowed.png'
import Warning from '../../images/warning.png'
import Prohibited from '../../images/prohibited.png'
import MagnifyingGlass from '../../images/magnifying_glass.png'




export class InstructionScreen extends Component {
    render() {
        return (
            <div className='instructions'>
                <h6> Camera </h6>
                <ul>
                <li>
                    <img src={CameraIcon}/> 
                    Scan your item
                </li>
                <li>
                    <img src={Target}/>  
                    Confirm item
                </li>
                <li>
                    <img src={Check}/>  
                    Get your result
                    <ul>
                        <li> 
                            <img src={Allowed} alt=""/>
                            Allowed 
                        </li>
                        <li> 
                            <img className='instr-warning' src={Warning} alt=""/>
                            Warning 
                        </li>
                        <li> 
                            <img src={Prohibited} alt=""/>
                            Prohibited 
                        </li>
                    </ul>
                </li>
                </ul>
                <h6> Manual search </h6>
                <ul>
                <li> 
                    <img src={MagnifyingGlass} alt=""/>
                    Enter item 
                </li>
                <li> 
                    <img src={Check} alt=""/>
                    Get your result 
                    <ul>
                        <li> 
                            <img src={Allowed} alt=""/>
                            Allowed 
                        </li>
                        <li> 
                            <img className='instr-warning' src={Warning} alt=""/>
                            Warning 
                        </li>
                        <li> 
                            <img src={Prohibited} alt=""/>
                            Prohibited 
                        </li>
                    </ul>
                </li>
                </ul>
          <button onClick={() => this.props.changeState('input')}> Back </button>
          </div>
        )
    }
}

export default InstructionScreen
