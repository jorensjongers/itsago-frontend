import React from 'react';
import WelcomeScreen from './screens/WelcomeScreen.jsx'
import InputScreen from './screens/InputScreen.jsx'
import StartScreen from './screens/StartScreen.jsx'
import TermsConditionsScreen from './screens/TermsConditionsScreen.jsx';
import ConfirmScreen from './screens/ConfirmScreen.jsx'
import MoreInfoScreen from './screens/MoreInfoScreen.jsx'
import ResponseScreen from './screens/RespopnseScreen.jsx'


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
            return <WelcomeScreen changeState={(next) => this.changeState(next)}/>;
          case 'start':
            return <StartScreen nextScreen={(next) => this.changeState(next)}/>;
          case 'input':
            return <InputScreen changeState={(next) => this.changeState(next)}/>;
          case 'moreinfo':
            return <MoreInfoScreen changeState={(next) => this.changeState(next)}/>;
          case 'terms':
            return <TermsConditionsScreen changeState={(next) => this.changeState(next)} />;
          case 'response':
            return <ResponseScreen changeState={(next) => this.changeState(next)} />;
          case 'confirm':
            return <ConfirmScreen changeState={(next) => this.changeState(next)} />;
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