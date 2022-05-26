import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { Route, Switch } from 'react-router-dom';
// import { light, dark } from '@themes/themes';

import loadable from '@loadable/component';
const SignIn = loadable(() => import('@pages/SignIn'));
const SignUp = loadable(() => import('@pages/SignUp'));
const Friends = loadable(() => import('@pages/Friends'));
const RoomList = loadable(() => import('@pages/RoomList'));
const RoomDetail = loadable(() => import('@pages/RoomDetail'));
const SeeMore = loadable(() => import('@pages/SeeMore'));
const Profile = loadable(() => import('@pages/Profile'));

const App = () => {
  return (
    // <ThemeProvider theme={}>
    <Switch>
      <Route exact path={'/'} component={SignIn} />
      <Route exact path={'/sign_in'} component={SignIn} />
      <Route exact path={'/sign_up'} component={SignUp} />
      <Route exact path={'/friends'} component={Friends} />
      <Route exact path={'/friends/:id'} component={Profile} />
      <Route exact path={'/rooms'} component={RoomList} />
      <Route exact path={'/rooms/:id'} component={RoomDetail} />
      <Route exact path={'/more'} component={SeeMore} />
    </Switch>
    // </ThemeProvider>
  );
};

export default App;
