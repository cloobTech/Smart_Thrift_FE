import { FC } from 'react';
import { Field, FieldProps } from 'formik';
import { FaExclamationCircle } from 'react-icons/fa';

interface CustomInputProps {
  name: string;
  label?: string;
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
      <Field name={name}>
        {({ field, meta }: FieldProps) => (
          <>
            <input
              {...field}
              type={type}
              className={`form-control ${
                meta.touched && meta.error ? 'is-invalid' : ''
              }`}
              placeholder={placeholder}
            />
            {meta.touched && meta.error && (
              <div className='error-message'>
                <FaExclamationCircle />
                <span>{meta.error}</span>
              </div>
            )}
          </>
        )}
      </Field>
    </div>
  );
};
