import React, { Component } from 'react'

export class InstructionScreen extends Component {
    render() {
        return (
            <div className='instructions'>
                <h6> Use camera or gallery </h6>
                <ul>
                <li>
                    <img src="/src/images/camera_icon.png" alt=""/> 
                    Scan your item
                </li>
                <li>
                    <img src="/src/images/target.png" alt=""/>  
                    Confirm item
                </li>
                <li>
                    <img src="/src/images/check.png" alt=""/>  
                    Get your result
                    <ul>
                        <li> 
                            <img src="/src/images/allowed.png" alt=""/>
                            Allowed 
                        </li>
                        <li> 
                            <img src="/src/images/warning.png" alt=""/>
                            Warning 
                        </li>
                        <li> 
                            <img src="/src/images/prohibited.png" alt=""/>
                            Prohibited 
                        </li>
                    </ul>
                </li>
                </ul>
                <h6> Use manual search </h6>
                <ul>
                <li> 
                    <img src="/src/images/magnifying_glass.png" alt=""/>
                    Enter item 
                </li>
                <li> 
                    <img src="/src/images/check.png" alt=""/>
                    Get your result 
                    <ul>
                        <li> 
                            <img src="/src/images/allowed.png" alt=""/>
                            Allowed 
                        </li>
                        <li> 
                            <img src="/src/images/warning.png" alt=""/>
                            Warning 
                        </li>
                        <li> 
                            <img src="/src/images/prohibited.png" alt=""/>
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
