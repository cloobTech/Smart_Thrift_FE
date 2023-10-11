import { FC } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import '../styles/components/confimation.css'

interface Details {
  details?: string;
  onDelete?: any;
  onCancel: () => void;
}

const ConfirmBox: FC<Details> = ({ details, onCancel, onDelete }) => {
  return (
    <div className='confimation'>
      <div>
        <h2>
          <FaExclamationTriangle /> ATTENTION!!!
        </h2>
        <p>{details}</p>
        <p className='red'>
          Note: <small>should you procced, action is irreversable</small>
        </p>
      </div>
      <section className='action-btns'>
        <button className='btn reset' type='reset' onClick={onCancel}>
          Cancel
        </button>
        <button className='btn' type='submit' onClick={onDelete}>
          Submit
        </button>
      </section>
    </div>
  );
};

export default ConfirmBox;
