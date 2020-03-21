import React from 'react';
import WelcomeScreen from './screens/WelcomeScreen.jsx'
import InputScreen from './screens/InputScreen.jsx'
import StartScreen from './screens/StartScreen.jsx'
import TermsConditionsScreen from './screens/TermsConditionsScreen.jsx';
import ConfirmScreen from './screens/ConfirmScreen.jsx'
import MoreInfoScreen from './screens/MoreInfoScreen.jsx'
import ResponseScreen from './screens/ResponseScreen.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO change to 'welcome'
      activeView: 'input',
      picturePath: null,
      item: 'your face'
    };
  }

  changeState = (newState) => {
    this.setState({activeView: newState})
  } 

  render() {
    const content = () => {
        switch(this.state.activeView) {
          case 'welcome':
            return  <WelcomeScreen 
                      changeState={(next) => this.changeState(next)}
                    />;
          case 'start':
            return  <StartScreen 
                      changeState={(next) => this.changeState(next)}
                    />;
          case 'input':
            return  <InputScreen 
                      changeState={(next) => this.changeState(next)}
                      setPath={(path) => this.setState({picturePath: path})} 
                      setItem={(str) => this.setState({item: str})} 
                    />;
          case 'moreinfo':
            return  <MoreInfoScreen 
                      changeState={(next) => this.changeState(next)}
                    />;
          case 'terms':
            return  <TermsConditionsScreen 
                      changeState={(next) => this.changeState(next)} 
                    />;
          case 'response':
            return  <ResponseScreen 
                      changeState={(next) => this.changeState(next)} 
                      result={this.state.result}
                    />;
          case 'confirm':
            return  <ConfirmScreen 
                      path={this.state.picturePath} 
                      item={this.state.item}
                      changeState={(next) => this.changeState(next)}
                    />;
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