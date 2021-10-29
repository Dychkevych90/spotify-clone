import React from "react";
import {Switch, Route} from 'react-router'

import SideBar from "../sideBar/sideBar";
import Home from "../../pages/home/Home";
import Search from "../../pages/search/search";
import Library from "../../pages/library/Library";
import Player from "../player/player";

const App = () => {
  return (
    <>
      <SideBar/>

      <Player/>

      <Switch>
        <Route path={'/home'} component={Home} exact/>
        <Route path={'/search'} component={Search} exact/>
        <Route path={'/library'} component={Library} exact/>
      </Switch>
    </>
  )
}

export default App;