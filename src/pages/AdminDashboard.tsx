import '../styles/pages/adminDashboard.css';
import bg from '../assets/undone.svg';

const AdminDashboard = () => {
  return (
    <div className='dashboard'>
      <h2>Admin Dashboard</h2>

      <div className='dashbord-bg'>
        <img src={bg} alt='' />
        <h4>Page Development in Progress...</h4>
      </div>
    </div>
  );
};

export default AdminDashboard;
