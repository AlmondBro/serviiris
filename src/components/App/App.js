import React, { Component, Fragment } from 'react';

import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

//Import styled-components
import { PageContainer } from './AppStyledComponents.js';

//import App components
import Header from './../Header/Header.js';
import Footer from './../Footer/Footer.js';

//Import Pages
import Home from './../Pages/Home/Home.js';
import AboutUs  from '../Pages/AboutUs/AboutUs.js';

import Specialties from './../Pages/Specialties/Specialties.js';

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

    return (
      <Fragment>
        <Header/>
        <PageContainer className="container-fluid" id="page-container">
          <Switch>
            <Route  exact 
                    path    = {`${publicURL}/`}
                    render  = { () => ( <Redirect to={`${publicURL}/${defaultURL}`} /> ) }
                                
            />
            <Route   
                    path    = { `${publicURL}/home` } 
                    render  = { () => {
                                          return (
                                            <Home/>
                                          );
                                      }
                              } 
            />
            <Route   
                      path    = { [`${publicURL}/about-us`, `${publicURL}/conocenos`] }
                      render  = { () => {
                                    return (
                                      <AboutUs/>
                                    );
                                  }
                                } 
            />
               <Route   
                      path    = { [`${publicURL}/specialties`, `${publicURL}/especialidades`] }
                      render  = { () => {
                                    return (
                                      <Specialties/>
                                    );
                                  }
                                } 
            />
          </Switch>
        </PageContainer>
        <Footer/>    
        {/* <div>Testtt</div>                       */}
      </Fragment>
    );
  }; //end render() method
} //end App class

export default App;
