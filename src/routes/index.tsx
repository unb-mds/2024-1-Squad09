import { createBrowserRouter } from 'react-router-dom';
import DashboardScreen from '../pages/Dashboard';
import CalendarComponent from '../components/Calendar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardScreen />,
    children: [
      {
        path: '/Calendar',
        element: <CalendarComponent />,
      },
    ],
  },
]);

export default router;