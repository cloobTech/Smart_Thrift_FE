import { FC } from 'react';
import { Field, ErrorMessage } from 'formik';

interface CustomInputProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}

export const TextInput: FC<CustomInputProps> = ({
  name,
  label,
  type = 'text',
  placeholder,
}) => {
  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <Field
        name={name}
        type={type}
        className='form-control'
        placeholder={placeholder}
      />
      <ErrorMessage name={name} component='div' className='error-message' />
    </div>
  );
};
