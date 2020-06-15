import { useState } from 'react';
import { navigate, usePath } from 'hookrouter';

const useTabs = () => {
  const [tabIndex, setIndex] = useState(0);

  const tabs = [
    {
      name: 'home',
      route: '/',
    },
    {
      name: 'join',
      route: '/join',
    },
    {
      name: 'events',
      route: '/events',
    },
    {
      name: 'about',
      route: '/about',
    },
    {
      name: 'support',
      route: '/support',
    },
    {
      name: 'contact',
      route: '/contact',
    },
  ];

  const changeTabs = (_, index) => {
    const newTab = tabs[index];
    navigate(newTab.route);
    setIndex(index);
  };

  const currentPath = usePath(false);

  const adjustHighlighting = () => {
    const routeIndex = tabs.findIndex((t) => t.route === currentPath);
    setIndex(routeIndex);
  };

  /** This ensures that the nav bar has the correct highlighting when the back button is pressed */
  window.onpopstate = () => {
    adjustHighlighting();
  };

  return [tabs, tabIndex, changeTabs];
};

export default useTabs;
