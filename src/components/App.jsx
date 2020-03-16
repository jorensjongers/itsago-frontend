import React from 'react';
import InputScreen from './screens/InputScreen.jsx'
import StartScreen from './screens/StartScreen.jsx'
import OtherScreen from './screens/OtherScreen.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO change to 'start'
      activeView: 'input'
    };
  }

  changeState = (newState) => {
    this.setState({activeView: newState})
  } 

  render() {
    const content = () => {
        switch(this.state.activeView) {
          case 'start':
            return <StartScreen nextScreen={() => this.setState({activeView: 'input'})}/>;
          case 'input':
            return <InputScreen/>;
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