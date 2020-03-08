import React from 'react';
import CameraScreen from './screens/CameraScreen.jsx'
import StartScreen from './screens/StartScreen.jsx'
import OtherScreen from './screens/OtherScreen.jsx'
import Navbar from './Navbar.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeView: 'start'
    };
  }

  changeState = (newState) => {
    this.setState({activeView: newState})
  } 

  render() {
    const content = () => {
        switch(this.state.activeView) {
          case 'start':
            return <StartScreen/>;
          case 'camera':
            return <CameraScreen/>;
          case 'other':
            return <OtherScreen/>;
        }
    }
    return (
      <div className='screen'>
        {content()}
        <Navbar changeState={this.changeState}/>
      </div>
    )
  } 
}
export default App;