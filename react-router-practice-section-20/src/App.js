import { Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import MainNavigation from './components/layout/MainNavigation';

import AllQuotes from './pages/AllQuotes';
import AddQuote from './pages/AddQuote';

function App() {
  return (
    <div>
      <MainNavigation />

      <Layout>
        <Route path="/quotes">
          <AllQuotes />
        </Route>
        <Route path="/add-quote">
          <AddQuote />
        </Route>
      </Layout>
    </div>
  );
}

export default App;
