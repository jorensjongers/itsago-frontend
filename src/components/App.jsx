import React from 'react';
import ReactGA from 'react-ga';
import WelcomeScreen from './screens/WelcomeScreen.jsx'
import InputScreen from './screens/InputScreen.jsx'
import TermsConditionsScreen from './screens/TermsConditionsScreen.jsx';
import ConfirmScreen from './screens/ConfirmScreen.jsx'
import ResponseScreen from './screens/ResponseScreen.jsx'
import InstructionScreen from './screens/InstructionScreen.jsx'
import SearchBar from './screens/SearchBar.jsx';
import CameraScreen from './screens/Camera.jsx'
import Feedback from './screens/Feedback.jsx'


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
        ReactGA.initialize('UA-163991824-1');

        switch(this.state.activeView) {
          case 'welcome':
            ga('set', 'page', '/welcome.html');
            ga('send', 'pageview');
            return  <WelcomeScreen 
                      changeState={(next) => this.changeState(next)}
                    />;
          case 'input':
            ga('set', 'page', '/input.html');
            ga('send', 'pageview');
            return  <InputScreen 
                      changeState={(next) => this.changeState(next)}
                    />;
          case 'moreinfo':
            ga('set', 'page', '/moreinfo.html');
            ga('send', 'pageview');
            return  <MoreInfoScreen 
                      changeState={(next) => this.changeState(next)}
                    />;
          case 'terms':
            ga('set', 'page', '/terms.html');
            ga('send', 'pageview');
            return  <TermsConditionsScreen 
                      changeState={(next) => this.changeState(next)} 
                    />;
          case 'response':
            ga('set', 'page', '/response.html');
            ga('send', 'pageview');
            return  <ResponseScreen 
                      changeState={(next) => this.changeState(next)} 
                      item={this.state.item}
                      path={this.state.picturePath}
                    />;
          case 'confirm':
            ga('set', 'page', '/confirm.html');
            ga('send', 'pageview');
            return  <ConfirmScreen 
                      path={this.state.picturePath}
                      setItem={(str) => this.setState({item: str})} 
                      changeState={(next) => this.changeState(next)}
                      items={this.state.items}
                    />;
          case 'instructions':
            ga('set', 'page', '/instructions.html');
            ga('send', 'pageview');
            return  <InstructionScreen 
                      changeState={(next) => this.changeState(next)}
                    />;
          case 'camera':
            ga('set', 'page', '/camera.html');
            ga('send', 'pageview');
            return <CameraScreen 
                      changeState={(next) => this.changeState(next)}
                      setPath={(path) => this.setState({picturePath: path})}
                      setItems={(items) => this.setState({items: items})}
                    />
          case 'manual':
            ga('set', 'page', '/manual.html');
            ga('send', 'pageview');
            return <SearchBar
                      continue={() => this.changeState('response')}
                      setItem={(str) => this.setState({item: str})}
                      changeState={(next) => this.changeState(next)}
                    />
          case 'feedback':
            ga('set', 'page', '/feedback.html');
            ga('send', 'pageview');
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