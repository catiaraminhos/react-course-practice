import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';

const AddQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const navigationHistory = useHistory();

  useEffect(() => {
    if (status === 'completed') {
      navigationHistory.push('/quotes');
    }
  }, [status, navigationHistory]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  return <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />;
};

export default AddQuote;
