import { Outlet } from 'react-router-dom';

import EventsNavigation from '../components/EventsNavigation';

const RootEventsLayout = () => {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
};

export default RootEventsLayout;
