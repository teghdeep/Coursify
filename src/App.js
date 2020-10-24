import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Components/Home";


import NotFound from "./Components/NotFound";




function App() {

 
  return (
    
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
