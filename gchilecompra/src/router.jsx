import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";



import NavBar from "./components/navbar.jsx";
import Home from "./views/home.jsx";
import About from "./views/about.jsx";


function AppRouter () {
 return (

<React.Fragment>
  <NavBar />
    <Router>
        <Switch>
          <Route path='/about' component= {About} />
          {/* <Route path='/contact' component= {ContactPage} /> */}
            {/* <Route path='/contact' component= {ContactPage} /> */}
             {/* <Route path='/contact' component= {ContactPage} /> */}
          <Route exact path="/" component={Home} />
        </Switch>
    </Router>
    </React.Fragment>
  );
}
        
export default AppRouter;