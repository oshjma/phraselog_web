import React from 'react';
import { connect } from 'react-redux';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import Appbar from '~/containers/Appbar';
import Toolbar from '~/containers/Toolbar';
import Seekbar from '~/containers/Seekbar';
import Home from '~/containers/Home';
import Profile from '~/containers/Profile';
import Player from '~/containers/Player';
import Chart from '~/containers/Chart';
import Notificator from '~/containers/Notificator';
import Space from '~/components/Space';
import { getHistory } from '~/history';

function Root({ signInUser }) {
  return (
    <>
      <Router history={getHistory()}>
        <Switch>
          <Route exact path="/">
            <>
              <Appbar />
              <Space />
              <Home />
            </>
          </Route>
          <Route exact path="/users/:id_string">
            <>
              <Appbar />
              <Space />
              <Profile />
            </>
          </Route>
          <Route exact path="/new">
            {device.type === 'desktop' && signInUser ? (
              <>
                <Toolbar />
                <Space />
                <Seekbar />
                <Chart />
              </>
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route exact path="/:id_string">
            {device.type === 'desktop' ? (
              <>
                <Toolbar />
                <Space />
                <Seekbar />
                <Chart />
              </>
            ) : (
              <>
                <Appbar />
                <Space />
                <Player />
              </>
            )}
          </Route>
        </Switch>
      </Router>
      <Notificator />
    </>
  );
}

export default connect(state => ({
  signInUser: state.auth.signInUser
}))(Root);
