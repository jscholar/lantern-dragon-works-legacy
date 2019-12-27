import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './layout/Layout';
import { ROUTES as routes, COMPONENTS as components } from './routes/ROUTES'

class App extends React.Component {
    render() {
        return (
            <Layout>
              <Switch>
                {routes.map(route => (
                  <Route 
                    key={route.name} 
                    path={route.path} 
                    component={components[route.name]}>
                  </Route>
                ))}
                <Route path="/" component={components["NoPage"]}></Route>
              </Switch>
            </Layout>
        )
    }
}

export default App;
