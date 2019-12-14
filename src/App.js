import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './layout/Layout';
import NoPage from './routes/NoPage/NoPage';
import Credits from './routes/Credits/Credits';
class App extends React.Component{
    render() {
        return (
            <Layout>
              <Switch>
                <Route path="/" exact></Route>
                <Route path="/credits" component={Credits}></Route>
                <Route path="/extras"></Route>
                <Route path="/gallery"></Route>
                <Route path="/stories"></Route>
                <Route path="/" component={NoPage}></Route>
              </Switch>
            </Layout>
        )
    }
}

export default App;
