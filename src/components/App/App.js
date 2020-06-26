import React, { Component } from 'react';

import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

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
    const publicURL = ""; //process.env.PUBLIC_URL;
    const defaultURL = "home";

    return ([
      <Header/>, 
      <AppContainer fluid>
        
        <Switch>
          <Route  exact 
                  path    = {`${publicURL}/`}
                  render  = { () => ( <Redirect to={`${publicURL}/${defaultURL}`} /> ) }
                              
          />
           <Route   
                  path={`${publicURL}/home`}
                                render={ () => {
                                        return (
                                          <Home/>
                                        );
                                    }
                                } 
          />
        </Switch>
        <Footer/>                          
      
      </AppContainer>
    ]
    );
  }; //end render() method
} //end App class

export default App;
