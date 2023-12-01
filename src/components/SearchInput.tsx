import React from 'react';
import { Formik, Form } from 'formik';
import { TextInput } from './forms/formElements';
import { FaSearch } from 'react-icons/fa';
import '../styles/components/search.css';

interface SearchProps {
  className?: string;
  onClick?: () => void;
  placeholder?: string;
  onSubmit?: () => void;
}

const SearchInput: React.FC<SearchProps> = ({
  className,
  onSubmit,
  placeholder,
}) => {
  return (
    <div className={`search-input ${className}`}>
      <FaSearch />

      <Formik
        initialValues={{ searchString: '' }}
        // @ts-ignore
        onSubmit={onSubmit}
        // Add validation schema using Yup if needed
        // validationSchema={yourValidationSchema}
      >
        <Form>
          <TextInput name='searchString' placeholder={placeholder} />
          <button type='submit' className='btn'>
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchInput;
