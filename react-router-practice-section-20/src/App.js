import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

const AllQuotes = React.lazy(() => import('./pages/AllQuotes'));
const AddQuote = React.lazy(() => import('./pages/AddQuote'));
const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Navigate to="/quotes" replace />} />
          <Route path="/quotes" element={<AllQuotes />} />
          <Route path="/quotes/:quoteId/*" element={<QuoteDetail />} />
          <Route path="/add-quote" element={<AddQuote />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
