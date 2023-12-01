import { FC } from 'react';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import '../styles/components/pagination.css';

interface PaginationProps {
  page: number;
  total_pages: number;
  onPrevClick: () => void;
  onNextClick: () => void;
  onClick: () => void;
  next: number | null;
  prev: number | null;
}

const Pagination: FC<PaginationProps> = ({
  page,
  total_pages,
  next,
  prev,
  onNextClick,
  onPrevClick,
  onClick,
}) => {
  return (
    <div className='pagination'>
      <span>
        Page {page} of {total_pages}
      </span>
      <div className='pagination-btn'>
        <button
          className={`btn ${!prev && 'btn-hide'}`}
          title='prev'
          onClick={onPrevClick}
        >
          <FaCaretLeft /> Prev
        </button>

        <div className='page-btns'>
          {Array.from({ length: total_pages }, (_, index) => (
            <button
              onClick={onClick}
              key={index}
              className={`btn ${index + 1 === page && 'active'}`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <button
          className={`btn ${!next && 'btn-hide'}`}
          title='next'
          onClick={onNextClick}
        >
          Next
          <FaCaretRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
