import { FaTrash, FaPen } from 'react-icons/fa';

// @ts-ignore
function UserRow({ serial_number, first_name, last_name, registered, role }) {
  return (
    <div className='table-row'>
      <p className='serial-number'>{serial_number}</p>
      <p className='first-name'>{first_name}</p>
      <p className='last-name'>{last_name}</p>
      <p className='status'>{registered ? 'registered' : 'not registered'}</p>
      <p className='role'>{role}</p>
      <p className='actions'>
        <ul className='action-btns'>
          <li title='Remove User' className='delete'>
            <FaTrash />
          </li>
          <li title='Edith' className='edit'>
            <FaPen />
          </li>
        </ul>
      </p>
    </div>
  );
}

export default UserRow;
