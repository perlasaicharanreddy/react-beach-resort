import React from 'react';
import Home from "../src/pages/Home";
import Rooms from "../src/pages/Rooms";
import SingleRoom from "../src/pages/SingleRoom";
import Error from "../src/pages/Error";
import {Route, Switch} from "react-router-dom";
import NavBar from "./components/Navbar"


function App() {
  return( 
  <>
  <NavBar/>
  <Switch>
  <Route exact path="/" component={Home}/>
  <Route exact path="/rooms" component={Rooms}/>
  <Route exact path="/rooms/:slug" component={SingleRoom}/>
  <Route component={Error}/>
  </Switch>
   </>
  );
}

export default App;
