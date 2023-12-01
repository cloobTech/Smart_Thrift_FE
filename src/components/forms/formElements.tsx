import { FC } from 'react';
import { Field, FieldProps, useField } from 'formik';
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
  ...props
}) => {
  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ field, meta }: FieldProps) => (
          <>
            <input
              {...props}
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

// Check box
// @ts-ignore
export const Checkbox = ({ children, onChange, className, ...props }) => {
  // @ts-ignore
  const [field, meta, helpers] = useField({ ...props, type: 'checkbox' });
  const handleCheckboxChange = () => {
    // Manually toggle the value when the checkbox is clicked
    helpers.setValue(!field.value);
  };
  return (
    <div>
      <label className={className}>
        <input
          type='checkbox'
          {...field}
          {...props}
          onChange={handleCheckboxChange}
        />
        <span>{children}</span>
      </label>
      {/* {meta.touched && meta.error ? (
        <div className='error-message'>{meta.error}</div>
      ) : null} */}
    </div>
  );
};

// Radio Btn
// @ts-ignore
export const Radio = ({ children, ...props }) => {
  // @ts-ignore
  const [field, meta] = useField({ ...props, type: 'radio' });
  return (
    <div className='radio-btn'>
      <label className='radio-input'>
        <span>{children}</span>
        <input type='radio' {...field} {...props} />
      </label>
      {/* {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null} */}
    </div>
  );
};
