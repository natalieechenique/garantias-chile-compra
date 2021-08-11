import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./navbar.jsx";

import Home from "../views/home/home";
import About from "../views/about.jsx";
import Bidding from "../views/bidding.jsx";
import Warranty from "../views/warranty.jsx";
import Contact from "../views/home/contact.jsx";
import Welcome from "../views/welcome.jsx";
import Register from "../views/register.jsx";

import LoginForm from  "../components/loginForm.jsx";
import Api from "../components/api.jsx";
import PruebaApi from "../components/pruebaApi.jsx";
import Faqs from "../views/faqs.jsx";

function AppRouter() {
  return (

    <React.Fragment>
      <NavBar />
      <Router>
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/bidding' component={Bidding} />
          <Route path='/warranty' component={Warranty} />
          <Route path='/contact' component={Contact} />
          <Route path='/register' component={Register} />
    
          <Route path='/loginForm' component= {LoginForm} />
          <Route path='/warranty' component= {Warranty} />

          <Route path='/welcome' component={Welcome} /> 

          <Route path='/api' component={Api} />

          {/* Nos pintará el componente PruebaApi */}
          <Route path='/api:id' component={PruebaApi} />
      

          {/* Ruta dentro de api, id es una variable, pùede ser otro nombre */}

          <Route path='/faqs' component={Faqs} /> 

          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default AppRouter;