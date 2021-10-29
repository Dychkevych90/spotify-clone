import React from "react";

import * as Style from "../styled";
import {NavLink} from "react-router-dom";

const Navigation = () => {
  return(
    <Style.Navigation>
      <li>
        <NavLink to={'/home'}>
        <svg role="img" height="24" width="24" className="Svg-sc-1bi12j5-0 gSLhUO home-icon" viewBox="0 0 24 24">
          <path fill={'#fff'} d="M9 14h6v7h5V7.8l-8-4.6-8 4.6V21h5v-7zm1 8H3V7.2L12 2l9 5.2V22h-7v-7h-4v7z" />
        </svg>
        <span>Home</span>
      </NavLink>
      </li>
      <li>
        <NavLink to={'/search'} activeClassName="active">
        <svg role="img" height="24" width="24" className="Svg-sc-1bi12j5-0 gSLhUO search-icon" viewBox="0 0 24 24">
          <path fill={'#fff'}
  d="M16.387 16.623A8.47 8.47 0 0019 10.5a8.5 8.5 0 10-8.5 8.5 8.454 8.454 0 005.125-1.73l4.401 5.153.76-.649-4.399-5.151zM10.5 18C6.364 18 3 14.636 3 10.5S6.364 3 10.5 3 18 6.364 18 10.5 14.636 18 10.5 18z"/>
        </svg>
        <span>Search</span>
      </NavLink>
      </li>
      <li>
        <NavLink to={'/library'} activeClassName="active">
        <svg role="img" height="24" width="24" className="Svg-sc-1bi12j5-0 gSLhUO collection-icon"
             viewBox="0 0 24 24">
          <path fill={'#fff'} d="M13.66 4.097l-.913.406 7.797 17.513.914-.406L13.66 4.097zM3 22h1V4H3v18zm6 0h1V4H9v18z"/>
        </svg>
        <span>Your Library</span>
      </NavLink>
      </li>
    </Style.Navigation>
  )
}

export default Navigation;