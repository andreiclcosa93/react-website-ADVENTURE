import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
// import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Routes> */}
        <Switch>
          
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />

        </Switch>
        {/* </Routes> */}
      </Router>
      
    </>
  );
}

export default App;
