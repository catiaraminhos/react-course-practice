import { json, useRouteLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';

const EventDetailPage = () => {
  const data = useRouteLoaderData('event-detail');

  return <EventItem event={data.event} />;
};

export default EventDetailPage;

export const loader = async ({ params }) => {
  const eventId = params.id;

  const response = await fetch('http://localhost:8081/events/' + eventId);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event.' },
      { status: 500 }
    );
  } else {
    return response;
  }
};
