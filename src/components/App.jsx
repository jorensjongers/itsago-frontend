import React from 'react';
import CameraScreen from './screens/CameraScreen.jsx'
import StartScreen from './screens/StartScreen.jsx'
import OtherScreen from './screens/OtherScreen.jsx'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

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
        <div className='screen'> {content()} </div>
        <BottomNavigation
        value={this.state.activeView}
        onChange={(event, newValue) => {
          this.changeState(newValue);
        }}
        showLabels
        >
        <BottomNavigationAction label="Start" value='start'/>
        <BottomNavigationAction label="Camera" value='camera' />
        <BottomNavigationAction label="Other"  value='other'/>
        </BottomNavigation>
      </div>
    )
  }
}
export default App;