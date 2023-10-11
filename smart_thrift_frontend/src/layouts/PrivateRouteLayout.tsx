import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store/slices/usersSlice';
import {
  FaUsers,
  FaCogs,
  FaDollarSign,
  FaMoneyCheck,
  FaBell,
  FaChartBar,
  FaPiggyBank,
} from 'react-icons/fa';
import '../styles/layouts/private.css';
import SearchInput from '../components/SearchInput';

const PrivateRouteLayout = () => {
  const dispatch = useDispatch();
  // const state = useSelector((state: any) => state.users);
  const { token } = useSelector((state: any) => state.auth);
  const navigate = useNavigate();

  // logout User
  const handleLogout = () => {
    console.log('Logging out...');
    localStorage.removeItem('token');
    // Check if the user is already logged out before navigating
    if (localStorage.getItem('token')) {
      navigate('/home');
    }
  };


  // search for an iten
  const getUsersHandler = (page: number = 1, page_size: number = 6) => {
    // @ts-ignore
    dispatch(fetchUsers({ token, page, page_size }));
  };

  return (
    <div className='private-layout'>
      <header>
        <nav>
          <span className='logo'>
            <FaPiggyBank />
          </span>

          <SearchInput
            // onClick={h}
            className='search-bar'
            placeholder='Search name'
          />
          <div className='user-info'>
            <button className='btn log-out' onClick={handleLogout}>
              Log Out
            </button>
            <span className='user-name'>Olamide Bello</span>
            {/* <span className='Initials'>AB</span> */}
          </div>
        </nav>
      </header>
      <main>
        <section className='side-nav'>
          <ul>
            {/* @ts-ignore */}
            <li onClick={() => getUsersHandler(1, 6)}>
              <NavLink to={'/users'}>
                <FaUsers />
                <span>Members</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={'/contributions'}>
                <FaMoneyCheck />
                <span>Contribution</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={'/loan'}>
                <FaDollarSign />
                <span>Loan</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={'/transactions'}>
                <FaChartBar />
                <span>Transactions</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={'/notifications'}>
                <FaBell />
                <span>Notification</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={'/settings'}>
                <FaCogs />
                <span>Settings</span>
              </NavLink>
            </li>
          </ul>
        </section>
        {/* Side Bar*/}
        <section className='outlet'>
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default PrivateRouteLayout;
