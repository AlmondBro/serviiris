import React, { Component } from 'react';

//Import styled-components
import { AppContainer } from './AppStyledComponents.js';

//import App components
import Header from './../Header/Header.js';
import Footer from './../Footer/Footer.js';

//Import Pages
import Home from './../Pages/Home/Home.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }; //end state object
  }

  componentDidMount = () => {

  }; //end componentDidMount 

  render = () => {
    return (
      <AppContainer fluid>
          <Header />
       
        {/* <Home /> */}
        <Footer/>
      </AppContainer>
    ); //end return statement
  }; //end render() method
} //end App class

export default App;
