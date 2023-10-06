import { FC, useState } from 'react';
import { FaPlus, FaCaretRight, FaCaretLeft } from 'react-icons/fa';
import SearchInput from '../components/SearchInput';
import UserRow from '../components/UserRow';
import '../styles/pages/users.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store/slices/usersSlice';

const Users: FC = () => {
  const column: string | null = 'last_name';
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.users);
  const [searchString, setSearchString] = useState('' as any);

  const { users } = state;
  const { data, total_pages, page, page_size, next, prev, total_items } = users;
  const { token } = useSelector((state: any) => state.auth);

  // search for an iten
  const getUsersHandler = (
    page: number = 1,
    page_size: number = 6,
    column = null,
    search_string = ''
  ) => {
    // @ts-ignore
    dispatch(fetchUsers({ token, page, page_size, column, search_string }));
  };

  const handleSeach = (value: string) => {
    // Column to search on DB
    // @ts-ignore
    const search_string = value.searchString;
    setSearchString(search_string);

    dispatch(
      // @ts-ignore
      fetchUsers({ token, page, page_size, column, search_string })
    );
  };

  // useEffect(() => {
  //   // @ts-ignore
  // }, []);

  return (
    <div className='users lg-container'>
      <header>
        <h2 className='page-title'>
          All Users: <span>{total_items || 0}</span>
        </h2>
      </header>
      <main>
        <section className='filter-area'>
          <div className='search'>
            <SearchInput
              placeholder='search user by last name...'
              className='search-box'
              // @ts-ignore
              onSubmit={handleSeach}
            />
          </div>
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
            <h4 className='first-name'>First Name</h4>
            <h4 className='last-name'>Last Name</h4>
            <h4 className='status'>Status</h4>
            <h4 className='role'>Role</h4>
            <h4 className='actions'>Actions</h4>
          </div>
          <div className='table-body'>
            {data && data.length > 0 ? (
              data.map((data: any, index: number) => (
                <UserRow
                  {...data}
                  serial_number={(page - 1) * page_size + (index + 1)}
                />
              ))
            ) : (
              <div>No User</div>
            )}
          </div>
        </section>
        <section className='pagination-area'>
          <span>
            Page {page} of {total_pages}
          </span>
          <div className='pagination-btn'>
            {prev && (
              <button
                title='prev'
                onClick={() =>
                  // @ts-ignore
                  getUsersHandler(page - 1, page_size, column, searchString)
                }
              >
                <FaCaretLeft /> Prev
              </button>
            )}

            <div className='page-btns'>
              {Array.from({ length: total_pages }, (_, index) => (
                <button
                  onClick={() =>
                    // @ts-ignore
                    getUsersHandler(index + 1, page_size, column, searchString)
                  }
                  key={index}
                  className={`btn ${index + 1 === page && 'active'}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            {next && (
              <button
                title='next'
                onClick={() =>
                  // @ts-ignore
                  getUsersHandler(page + 1, page_size, column, searchString)
                }
              >
                Next
                <FaCaretRight />
              </button>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Users;
