import { Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import MainNavigation from './components/layout/MainNavigation';

import AllQuotes from './pages/AllQuotes';

function App() {
  return (
    <div>
      <MainNavigation />

      <Layout>
        <Route path="/quotes">
          <AllQuotes />
        </Route>
      </Layout>
    </div>
  );
}

export default App;
