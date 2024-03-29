import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home/Home';
import User from '../components/User/User';

/**
 * 
 * Array of top level and nested routes
 */
const router = [

  {
    path: "/",
    key: "home",
    exact: true,
    component: () => <Home/> 
  },
  {
    path: "/sample",
    key: "sample",
    component: RenderRoutes,
    routes: [
      {
        path: "/sample",
        key: "sample_root",
        exact: true,
        component: () => <h1>Sample Root</h1>,
      },
      {
        path: "/sample/page",
        key: "/sample_page",
        exact: true,
        component: () => <h1>Sample Page</h1>,
      },
    ],
  },
  {
    path: "/users",
    key: "users",
    component: RenderRoutes,
    routes: [
      {
        path: "/users",
        key: "all_users",
        exact: true,
        component: () => <User/>
      }
    ]
  }
];

export default router;

/**
 * 
 * Render a route with potential subroutes
 */
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      // Pass the subroutes down to keep nesting
      render={props => <route.component {...props} routes={route.routes} />}
    />
  )
};

/**
 *  Use for any new section of routes (any config object that has a routes property)
 */
export function RenderRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
};