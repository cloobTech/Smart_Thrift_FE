import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import Landing from '../pages/Landing';
import AdminDashboard from '../pages/AdminDashboard';
import PrivateRouteLayout from '../layouts/PrivateRouteLayout';
import PulicRoutes from '../components/PublicRoute';
import PrivateRoutes from '../components/PrivateRoute';
import Users from '../pages/Users';
import User from '../pages/User';
import ContributionsLayout from '../layouts/ContributionsLayout';
import ContributionProfile from '../pages/ContributionProfile';
import ContributionDetails from '../pages/ContributionDetails';

export const Routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<PulicRoutes />}>
        <Route path='/home' element={<Landing />} />
      </Route>

      {/* Private Route */}
      <Route element={<PrivateRoutes />}>
        <Route path='/' element={<PrivateRouteLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path='/users' element={<Users />}></Route>
          <Route path='users/:id' element={<User />} />
          <Route path='/contributions' element={<ContributionsLayout />}>
            <Route index path='profile' element={<ContributionProfile />} />
            <Route path='details' element={<ContributionDetails />} />
          </Route>
        </Route>
      </Route>
    </Route>
  )
);
