import { useParams } from 'react-router-dom';

const QuoteDetail = () => {
  const params = useParams();

  return <section>
    <h1>Quote Details</h1>
    <p>{params.quoteId}</p>
  </section>;
};

export default QuoteDetail;
