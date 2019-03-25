import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import Home from '../Home';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import SignOutButton from '../SignOut';
import Lobby from '../Lobby';

const Navigation = ({ authUser }) => (
  <div>{ authUser ? <AuthorizedNavigation authUser = {true}/> : <UnauthorizedNavigation authUser = {false} /> }</div>
);

class AuthorizedNavigation extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      authUser: this.props.authUser,
    };
    // this.state= this.authUser;
  }
  render(){
    return <div>
      <ul>
        <li>
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.ACCOUNT}>Account</Link>
        </li>
        <li>
          <SignOutButton />
        </li>
        <Route path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      </ul>
      <Lobby authUser={this.state}></Lobby>
    </div>
  }
}

const UnauthorizedNavigation = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign in</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_UP}>Sign up</Link>
    </li>
    <Route path={ROUTES.SIGN_IN} component={SignInPage} />
    <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
    <Route path={ROUTES.LANDING} component={Home} />
  </ul>
);

export default Navigation;
