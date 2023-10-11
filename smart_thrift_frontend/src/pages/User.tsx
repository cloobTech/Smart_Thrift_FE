import { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  FaChevronLeft,
  FaCheckCircle,
  FaTimesCircle,
  FaPen,
  FaPrint,
} from 'react-icons/fa';
import { fetchUser } from '../store/slices/usersSlice';
import profileImg from '../assets/profile.svg';
import * as CurrencyFormat from 'react-currency-format';
import { UpdateUser } from '../components/forms/users';
import Modal from '../components/Modal';
import formatDate from '../utils/dateFormat';
import '../styles/pages/user.css';

const User = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { users } = useSelector((state: any) => state.users);
  const { token } = useSelector((state: any) => state.auth);
  const [isOpen, setIsModalOpen] = useState<boolean>(false);
  const [refresh, setReferesh] = useState(false);
  const [modalContent, setModalContent] = useState(null); // Annotate modalContent

  const { first_name, last_name, registered, role, slot, email, created_at } =
    users;

    // Format Date Object
  let date = '';
  if (created_at) {
    const dateObj = new Date(created_at);
    const dateFormat = formatDate(dateObj, 'EEE dd MMM yyyy');
    date = dateFormat;
  }

  const editHandler = () => {
    setIsModalOpen(true);
    // @ts-ignore
    setModalContent(<UpdateUser {...users} closeModal={handleModalClose} />);
    setReferesh(!refresh);
  };

  // Handle Modal close
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchUser({ token, id }));
  }, [isOpen]);

  return (
    <div className='user container'>
      <header>
        <NavLink className='btn' to={'/users'}>
          <FaChevronLeft />
          Back
        </NavLink>
        <h2>{`${first_name}  ${last_name}`}</h2>
        <span className='role'>{role}</span>
      </header>
      <section className='details-card'>
        <ul className='details'>
          <li>
            <span className='key'>Email</span>
            <span className='value'>{email}</span>
          </li>
          <li>
            <span className='key'>Contribution</span>
            <CurrencyFormat
              value={2456981}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'N'}
            />
          </li>
          <li>
            <span className='key'>Loan</span>
            <CurrencyFormat
              value={100000}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'N'}
              className='red'
            />
            {/* <span className='value'>Value</span> */}
          </li>
          <li>
            <span className='key'>Interest</span>
            <CurrencyFormat
              value={10000}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'N'}
              className='green'
            />
            {/* <span className='value'>Value</span> */}
          </li>
          <li>
            <span className='key'>Slot</span>

            <span className='value'>{slot}</span>
          </li>
          <li>
            <span className='key'>Registered</span>

            <span className={`value ${registered ? 'blue' : 'red'}`}>
              {registered ? <FaCheckCircle /> : <FaTimesCircle />}
            </span>
          </li>
          <li>
            <span className='key'>Date Added</span>
            <span className='value'>{date}</span>
          </li>
        </ul>
        <div className='img'>
          <img src={profileImg} alt='SVG' />
        </div>
      </section>
      <section className='actions'>
        <p className='last-updated'>
          Last updated on 12th Oct 2023 by Olamide Bello
        </p>
        <div className='action-btns'>
          <button className='btn edit' onClick={editHandler}>
            {' '}
            <FaPen /> Edit
          </button>
          <button className='btn print'>
            <FaPrint />
            Print
          </button>
        </div>
      </section>
      <Modal
        isOpen={isOpen}
        modalContent={modalContent}
        onClose={handleModalClose}
      />
    </div>
  );
};

export default User;
