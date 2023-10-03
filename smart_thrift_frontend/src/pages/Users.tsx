import { FC } from 'react';
import {
  FaPlus,
  FaTrash,
  FaPenFancy,
  FaCaretRight,
  FaCaretLeft,
} from 'react-icons/fa';
import '../styles/pages/users.css';

const Users: FC = () => {
  return (
    <div className='users lg-container'>
      <header>
        <h2 className='page-title'>All Users</h2>
      </header>
      <main>
        <section className='filter-area'>
          <div className='search'></div>
          <div className='filter'></div>
          <button className='btn add-new'>
            <FaPlus />
            Add New Member
          </button>
        </section>
        {/* Table Section */}
        <section className='users-table'>
          <div className='table-head'>
            <h4 className='serial-number'>S/N</h4>
            <h4 className='name'>Name</h4>
            <h4 className='status'>Status</h4>
            <h4 className='role'>Role</h4>
            <h4>x</h4>
            <h4 className='actions'>Actions</h4>
          </div>
          <div className='table-body'>
            <div className='table-row'>
              <p className='serial-number'>1</p>
              <p className='name'>Olamide Bello</p>
              <p className='status'>Registered</p>
              <p className='role'>Admin</p>
              <p>x</p>
              <p className='actions'>
                <ul className='action-btns'>
                  <li title='Edit user info' className='delete'>
                    <FaTrash />
                  </li>
                  <li title='Remove User' className='edit'>
                    <FaPenFancy />
                  </li>
                </ul>
              </p>
            </div>
            <div className='table-row'>
              <p className='serial-number'>1</p>
              <p className='name'>Olamide Bello</p>
              <p className='status'>Registered</p>
              <p className='role'>Admin</p>
              <p>x</p>
              <p className='actions'>
                <ul className='action-btns'>
                  <li title='Edit user info' className='delete'>
                    <FaTrash />
                  </li>
                  <li title='Remove User' className='edit'>
                    <FaPenFancy />
                  </li>
                </ul>
              </p>
            </div>
            <div className='table-row'>
              <p className='serial-number'>1</p>
              <p className='name'>Olamide Bello</p>
              <p className='status'>Registered</p>
              <p className='role'>Admin</p>
              <p>x</p>
              <p className='actions'>
                <ul className='action-btns'>
                  <li title='Edit user info' className='delete'>
                    <FaTrash />
                  </li>
                  <li title='Remove User' className='edit'>
                    <FaPenFancy />
                  </li>
                </ul>
              </p>
            </div>
            <div className='table-row'>
              <p className='serial-number'>1</p>
              <p className='name'>Olamide Bello</p>
              <p className='status'>Registered</p>
              <p className='role'>Admin</p>
              <p>x</p>
              <p className='actions'>
                <ul className='action-btns'>
                  <li title='Edit user info' className='delete'>
                    <FaTrash />
                  </li>
                  <li title='Remove User' className='edit'>
                    <FaPenFancy />
                  </li>
                </ul>
              </p>
            </div>
            <div className='table-row'>
              <p className='serial-number'>1</p>
              <p className='name'>Olamide Bello</p>
              <p className='status'>Registered</p>
              <p className='role'>Admin</p>
              <p>x</p>
              <p className='actions'>
                <ul className='action-btns'>
                  <li title='Edit user info' className='delete'>
                    <FaTrash />
                  </li>
                  <li title='Remove User' className='edit'>
                    <FaPenFancy />
                  </li>
                </ul>
              </p>
            </div>
            <div className='table-row'>
              <p className='serial-number'>1</p>
              <p className='name'>Olamide Bello</p>
              <p className='status'>Registered</p>
              <p className='role'>Admin</p>
              <p>x</p>
              <p className='actions'>
                <ul className='action-btns'>
                  <li title='Edit user info' className='delete'>
                    <FaTrash />
                  </li>
                  <li title='Remove User' className='edit'>
                    <FaPenFancy />
                  </li>
                </ul>
              </p>
            </div>
            <div className='table-row'>
              <p className='serial-number'>1</p>
              <p className='name'>Olamide Bello</p>
              <p className='status'>Registered</p>
              <p className='role'>Admin</p>
              <p>x</p>
              <p className='actions'>
                <ul className='action-btns'>
                  <li title='Edit user info' className='delete'>
                    <FaTrash />
                  </li>
                  <li title='Remove User' className='edit'>
                    <FaPenFancy />
                  </li>
                </ul>
              </p>
            </div>
            <div className='table-row'>
              <p className='serial-number'>1</p>
              <p className='name'>Olamide Bello</p>
              <p className='status'>Registered</p>
              <p className='role'>Admin</p>
              <p>x</p>
              <p className='actions'>
                <ul className='action-btns'>
                  <li title='Edit user info' className='delete'>
                    <FaTrash />
                  </li>
                  <li title='Remove User' className='edit'>
                    <FaPenFancy />
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </section>
        <section className='pagination-area'>
          <span>Page 1 of 5</span>
          <div className='pagination-btn'>
            <button title='prev'>
              <FaCaretLeft />
            </button>
            <button title='next'>
              <FaCaretRight />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Users;
