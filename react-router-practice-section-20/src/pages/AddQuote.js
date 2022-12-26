import { useHistory } from 'react-router-dom';

import QuoteForm from '../components/quotes/QuoteForm';

const AddQuote = () => {
  const navigationHistory = useHistory();

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    navigationHistory.push('/quotes');
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default AddQuote;
