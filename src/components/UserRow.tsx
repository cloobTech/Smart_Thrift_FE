import { FC } from 'react';
import { FaTrash, FaPen } from 'react-icons/fa';

interface RowProps {
  id: string;
  serial_number?: string | any;
  first_name: string;
  last_name: string;
  registered: boolean;
  role: string;
  slot: number;
  onClick: () => void;
  onDelete: () => void;
  onEdit: () => void;
}

// @ts-ignore
const UserRow: FC<RowProps> = ({
  serial_number,
  first_name,
  last_name,
  registered,
  role,
  slot,
  onClick,
  onEdit,
  onDelete,
}) => {
  return (
    <div className='table-row' onClick={onClick}>
      <p className='serial-number'>{serial_number}</p>
      <p className='first-name'>{first_name}</p>
      <p className='last-name'>{last_name}</p>
      <p className='status'>{registered ? 'registered' : 'not registered'}</p>
      <p className='slot'>{slot}</p>
      <p className='role'>{role}</p>
      <div
        className='actions'
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <ul>
          <li title='Remove User' className='delete' onClick={onDelete}>
            <FaTrash />
          </li>
          <li title='Edith' className='edit' onClick={onEdit}>
            <FaPen />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserRow;
