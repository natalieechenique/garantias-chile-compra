import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import NavBar from "./navbar.jsx";

import Home from "../views/home.jsx";
import About from "../views/about.jsx";
import Bidding from "../views/bidding.jsx";
import Warranty from "../views/warranty.jsx";
import Contact from  "../views/contact.jsx";

import Register from "../views/register.jsx";
import Login from  "../views/login.jsx";

function AppRouter () {
 return (

<React.Fragment>
  <NavBar />
    <Router>
        <Switch>
          <Route path='/about' component= {About} />
          <Route path='/bidding' component= {Bidding} /> 
          <Route path='/warranty' component= {Warranty} />
          <Route path='/contact' component= {Contact} />
          <Route path='/register' component= {Register} />
          <Route path='/login' component= {Login} />
          <Route exact path="/" component={Home} />
        </Switch>
    </Router>
    </React.Fragment>
  );
}
        
export default AppRouter;