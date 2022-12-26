import { Redirect, Route, Switch } from 'react-router-dom';

import Layout from './components/layout/Layout';
import MainNavigation from './components/layout/MainNavigation';

import AllQuotes from './pages/AllQuotes';
import AddQuote from './pages/AddQuote';
import QuoteDetail from './pages/QuoteDetail';

function App() {
  return (
    <div>
      <MainNavigation />

      <Layout>
        <Switch>
          <Route exact path="/">
            <Redirect to="/quotes" />
          </Route>
          <Route exact path="/quotes">
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
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
