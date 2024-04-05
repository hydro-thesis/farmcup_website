import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import Home from './pages/Home/index';
import ErrorPage from './pages/ErrorPage/index';

import Moisture from './components/Moisture/moisture-index';
import TDS from './components/TDS/tds-index';
import PHLevel from './components/pH Level/pHLevel-index';
import EC from './components/EC/ec-index';
import AmbientLight from './components/AmbientLight/ambient-light-index';
import Humidity from './components/Humidity/humidity-index';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: '/404', element: <ErrorPage /> },
      { path: '/moisture', element: <Moisture /> },
      { path: '/tds', element: <TDS /> },
      { path: '/pHLevel', element: <PHLevel /> },
      { path: '/ec', element: <EC /> },
      { path: '/ambient_light', element: <AmbientLight /> },
      { path: '/humidity', element: <Humidity /> }
    ]
  },
  {
    path: '*',
    element: <Navigate to="/404" replace />
  }
];

const router = createBrowserRouter(routes);
export default router;
