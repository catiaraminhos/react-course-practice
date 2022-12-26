import { Redirect, Route, Switch } from 'react-router-dom';

import Layout from './components/layout/Layout';
import MainNavigation from './components/layout/MainNavigation';

import AllQuotes from './pages/AllQuotes';
import AddQuote from './pages/AddQuote';

function App() {
  return (
    <div>
      <MainNavigation />

      <Layout>
        <Switch>
          <Route exact path="/">
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes">
            <AllQuotes />
          </Route>
          <Route path="/add-quote">
            <AddQuote />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
