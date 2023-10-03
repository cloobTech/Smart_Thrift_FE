import { Outlet, NavLink } from 'react-router-dom';
import {
  FaUsers,
  FaCogs,
  FaDollarSign,
  FaMoneyCheck,
  FaBell,
  FaChartBar,
  FaPiggyBank,
  FaSearch,
} from 'react-icons/fa';
import '../styles/layouts/private.css';

const PrivateRouteLayout = () => {
  return (
    <div className='private-layout'>
      <header>
        <nav>
          <span className='logo'>
            <FaPiggyBank />
          </span>
          <div className='search-bar'>
            <FaSearch />
            <span>search</span>
            <button className='btn search-btn'>Submit</button>
          </div>
          <div className='user-info'>
            <button className='btn log-out'>Log Out</button>
            <span className='user-name'>Olamide Bello</span>
            {/* <span className='Initials'>AB</span> */}
          </div>
        </nav>
      </header>
      <main>
        <section className='side-nav'>
          <ul>
            <li>
              <NavLink to={'/'}>
                <FaUsers />
                <span>Members</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={'/'}>
                <FaMoneyCheck />
                <span>Loan</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={'/'}>
                <FaDollarSign />
                <span>Members</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={'/'}>
                <FaChartBar />
                <span>Transactions</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={'/'}>
                <FaBell />
                <span>Notification</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={'/'}>
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
