import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

// import Landing from '../pages/Landing';
import PrivateRouteLayout from '../layouts/PrivateRouteLayout';
import Users from '../pages/Users';

export const Routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* <Route path='/' element={<Landing />} /> */}

      <Route element={<PrivateRouteLayout />}>
        <Route path='/' element={<Users />} />
      </Route>
    </Route>
  )
);
