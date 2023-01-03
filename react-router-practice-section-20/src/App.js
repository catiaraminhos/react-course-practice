import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from './components/layout/Layout';

import AllQuotes from './pages/AllQuotes';
import AddQuote from './pages/AddQuote';
import NotFound from './pages/NotFound';
import QuoteDetail from './pages/QuoteDetail';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/quotes" replace />} />
        <Route path="/quotes" element={<AllQuotes />} />
        <Route path="/quotes/:quoteId/*" element={<QuoteDetail />} />
        <Route path="/add-quote" element={<AddQuote />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
