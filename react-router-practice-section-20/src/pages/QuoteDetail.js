import { useEffect } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';

const QuoteDetail = () => {
  const params = useParams();
  const quoteId = params.quoteId;

  const {
    sendRequest,
    status,
    data: quote,
    error
  } = useHttp(getSingleQuote, true);

  const loadCommentsLink = (
    <div className="centered">
      <Link className="btn--flat" to="comments">
        Load Comments
      </Link>
    </div>
  );

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === 'completed' && !quote.text) {
    return <p>No quote found!</p>;
  }

  return (
    <section>
      <HighlightedQuote author={quote.author} text={quote.text} />

      <Routes>
        <Route path="/" element={loadCommentsLink} />
        <Route path="comments" element={<Comments />} />
      </Routes>
    </section>
  );
};

export default QuoteDetail;
