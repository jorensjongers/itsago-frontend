import React from 'react';
import ReactGA from 'react-ga';
import WelcomeScreen from './screens/WelcomeScreen.jsx'
import InputScreen from './screens/InputScreen.jsx'
import TermsConditionsScreen from './screens/TermsConditionsScreen.jsx';
import ConfirmScreen from './screens/ConfirmScreen.jsx'
import ResponseScreen from './screens/ResponseScreen.jsx'
import InstructionScreen from './screens/InstructionScreen.jsx'
import SearchBar from './SearchBar.jsx';
import CameraScreen from './Camera.jsx'
import Feedback from './screens/Feedback.jsx'


function initializeReactGA() {
  ReactGA.initialize('UA-163991824-1');
  ReactGA.pageview('/homepage');
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeView: 'welcome',
      picturePath: null,
      items: null,
      item: ''
    };
  }

  changeState = (newState) => {
    if (newState == 'input')
      this.setState({
        activeView: 'input',
        picturePath: null,
        items: null,
        item: ''})
    else
      this.setState({activeView: newState})
  } 

  render() {
    const content = () => {
        switch(this.state.activeView) {
          case 'welcome':
            return  <WelcomeScreen 
                      changeState={(next) => this.changeState(next)}
                    />;
          case 'input':
            return  <InputScreen 
                      changeState={(next) => this.changeState(next)}
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
                      setItem={(str) => this.setState({item: str})} 
                      changeState={(next) => this.changeState(next)}
                      items={this.state.items}
                    />;
          case 'instructions':
            return  <InstructionScreen 
                      changeState={(next) => this.changeState(next)}
                    />;
          case 'camera':
            return <CameraScreen 
                      changeState={(next) => this.changeState(next)}
                      setPath={(path) => this.setState({picturePath: path})}
                      setItems={(items) => this.setState({items: items})}
                    />
          case 'manual':
            return <SearchBar
                      continue={() => this.changeState('response')}
                      setItem={(str) => this.setState({item: str})}
                      changeState={(next) => this.changeState(next)}
                    />
          case 'feedback':
            return <Feedback
                      changeState={(next) => this.changeState(next)}
                    />
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