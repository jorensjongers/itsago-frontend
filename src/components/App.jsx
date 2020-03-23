import React from 'react';
import WelcomeScreen from './screens/WelcomeScreen.jsx'
import InputScreen from './screens/InputScreen.jsx'
import StartScreen from './screens/StartScreen.jsx'
import TermsConditionsScreen from './screens/TermsConditionsScreen.jsx';
import ConfirmScreen from './screens/ConfirmScreen.jsx'
import ResponseScreen from './screens/ResponseScreen.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeView: 'welcome',
      picturePath: null,
      item: ''
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
                      item={this.state.item}
                      path={this.state.picturePath}
                    />;
          case 'confirm':
            return  <ConfirmScreen 
                      path={this.state.picturePath} 
                      changeState={(next) => this.changeState(next)}
                      item={this.state.item}
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