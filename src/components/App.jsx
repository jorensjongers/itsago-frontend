import React from 'react';
import CameraScreen from './screens/CameraScreen.jsx'
import StartScreen from './screens/StartScreen.jsx'
import OtherScreen from './screens/OtherScreen.jsx'

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
        <div>
          {content()}
        </div>
    )
  } 
}
export default App;