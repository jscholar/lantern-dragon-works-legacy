import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './layout/Layout'

class App extends React.Component{
    render() {
        return (
            <Layout>
              <Switch>
              </Switch>
            </Layout>
        )
    }
}

export default App;
