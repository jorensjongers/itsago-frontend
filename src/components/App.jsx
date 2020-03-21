import React from 'react';
import WelcomeScreen from './screens/WelcomeScreen.jsx'
import InputScreen from './screens/InputScreen.jsx'
import StartScreen from './screens/StartScreen.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO change to 'start'
      activeView: 'welcome'
    };
  }

  changeState = (newState) => {
    this.setState({activeView: newState})
  } 

  render() {
    const content = () => {
        switch(this.state.activeView) {
          case 'welcome':
            return <WelcomeScreen nextScreen={() => this.changeState('input')}/>;
          case 'start':
            return <StartScreen nextScreen={() => this.changeState('input')}/>;
          case 'input':
            return <InputScreen/>;
          case 'other':
            return <OtherScreen/>;
        }
    }
    return (
        <div className='screen'>
          {content()}
        </div>
    )
  } 
}
export default App;