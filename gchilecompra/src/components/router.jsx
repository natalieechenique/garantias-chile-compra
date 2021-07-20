import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./Navbar.jsx";

import Home from "../views/home/Home";
import About from "../views/About.jsx";
import Bidding from "../views/Bidding.jsx";
import Warranty from "../views/Warranty.jsx";
import Contact from "../views/home/Contact.jsx";

import Register from "../views/Register.jsx";
import LoginForm from  "./LoginForm.jsx";
import DocumentForm from  "./DocumentForm.jsx";
import Welcome from "../views/Welcome.jsx";
import Api from "./Api.jsx";
import PruebaApi from "./PruebaApi.jsx";

function AppRouter() {
  return (

    <React.Fragment>
      <NavBar />
      <Router>
        <Switch>
          <Route path='/About' component={About} />
          <Route path='/Bidding' component={Bidding} />
          <Route path='/Warranty' component={Warranty} />
          <Route path='/Contact' component={Contact} />
          <Route path='/Register' component={Register} />
    
          <Route path='/LoginForm' component= {LoginForm} />
          <Route path='/DocumentForm' component= {DocumentForm} />

          <Route path='/Welcome' component={Welcome} /> 

          <Route path='/Api' component={Api} />

          {/* Nos pintará el componente PruebaApi */}
          <Route path='/Api:id' component={PruebaApi} />
      

          {/* Ruta dentro de api, id es una variable, pùede ser otro nombre */}

          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default AppRouter;