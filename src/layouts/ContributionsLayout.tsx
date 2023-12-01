import { Outlet, NavLink } from 'react-router-dom';
import '../styles/layouts/contributions.css';

const ContributionsLayout = () => {
  return (
    <div className='contributions'>
      <header>
        <h2>Contributions</h2>
        <nav>
          <NavLink to={'/contributions/profile'}>Contribution Profile</NavLink>
          <NavLink to={'/contributions/details'}>Contribution Details</NavLink>
        </nav>
      </header>
      {/* Side Bar*/}
      <section className='outlet'>
        <Outlet />
      </section>
    </div>
  );
};

export default ContributionsLayout;
