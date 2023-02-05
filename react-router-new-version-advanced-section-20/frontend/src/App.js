import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import EditEventPage from './pages/EditEvent';
import ErrorPage from './pages/Error';
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction
} from './pages/EventDetail';
import EventsPage, { loader as eventsLoader } from './pages/Events';
import HomePage from './pages/Home';
import NewEventPage from './pages/NewEvent';
import { action as eventFormAction } from './components/EventForm';
import RootLayout from './pages/Root';
import RootEventsLayout from './pages/RootEvents';
import NewsletterPage, { action as newsletterAction } from './pages/Newsletter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <RootEventsLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader
          },
          {
            path: ':id',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: eventFormAction
              }
            ]
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: eventFormAction
          }
        ]
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
