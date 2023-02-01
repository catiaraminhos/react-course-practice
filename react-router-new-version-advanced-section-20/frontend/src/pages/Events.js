import { json, useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
  const data = useLoaderData();

  // Other implementations options
  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }

  const events = data.events;

  return <EventsList events={events} />;
}

export default EventsPage;

export const loader = async () => {
  const response = await fetch('http://localhost:8081/events');

  if (!response.ok) {
    // Other implementations options
    // return {
    //   isError: true,
    //   message: 'Could not fetch events.'
    // };

    // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
    //   status: 500
    // });

    throw json({ message: 'Could not fetch events.' }, { status: 500 });
  } else {
    return response;
  }
};
