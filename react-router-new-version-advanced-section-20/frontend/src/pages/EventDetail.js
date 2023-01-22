import { useParams } from 'react-router-dom';

const EventDetailPage = () => {
  const params = useParams();
  const eventId = params.id;

  return (
    <>
      <h1>Event Detail</h1>
      <p>{eventId}</p>
    </>
  );
};

export default EventDetailPage;
