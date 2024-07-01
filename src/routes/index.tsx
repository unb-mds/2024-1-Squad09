import { createBrowserRouter } from 'react-router-dom';
import CalendarComponent from '../components/Calendar';
import DashboardScreen from '../pages/Dashboard';
import MessagesPage from '../pages/Messages';
import SubjectsScreen from '../pages/Subjects';
import SignInScreen from '../pages/SignIn';
import SignUpScreen from '../pages/SignUp';
import LandingPage from '../pages/Landing';
import ProfilePage from '../pages/Profile';

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
  {
    path: '/Subjects',
    element: <SubjectsScreen />,
  },
  {
    path: '/Messages',
    element: <MessagesPage />,
  },
  {
    path: '/SignIn',
    element: <SignInScreen />,
  },
  {
    path: '/SignUp',
    element: <SignUpScreen />,
  },
  {
    path: '/Landing',
    element: <LandingPage />,
  },
  {
    path: '/Profile',
    element: <ProfilePage />,
  },
]);

export default router;
