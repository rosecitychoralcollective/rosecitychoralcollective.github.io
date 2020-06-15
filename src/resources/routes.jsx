import React from 'react';

import HomeScreen from '../screens/Home';
import About from '../screens/About';
import Events from '../screens/Events';
import JoinScreen from '../screens/Join';
import EventDetail from '../screens/EventDetail';
import Support from '../screens/Support';
import Contact from '../screens/Contact';

const routes = {
  '/': () => (classes) => <HomeScreen classes={classes} />,
  '/join': () => (classes) => <JoinScreen classes={classes} />,
  '/about': () => (classes) => <About classes={classes} />,
  '/events': () => (classes) => <Events classes={classes} />,
  '/eventdetail/:id': ({ id }) => (classes) => <EventDetail id={id} classes={classes} />,
  '/support': () => (classes) => <Support classes={classes} />,
  '/contact': () => (classes) => <Contact classes={classes} />,
};

export default routes;
