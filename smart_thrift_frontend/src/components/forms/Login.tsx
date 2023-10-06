import React from 'react';
import { Formik, Form } from 'formik';
import { TextInput } from './formElements';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/slices/authSlice';
import * as Yup from 'yup';
import '../../styles/forms/login.css';
import loginImg from '../../assets/login.svg';
import { FaLock } from 'react-icons/fa';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.auth);

  // @ts-ignore
  const handleSubmit = async (values: any, { resetForm, setSubmitting }) => {
    const formData = new FormData();
    formData.append('username', values.email);
    formData.append('password', values.password);

    // @ts-ignore
    dispatch(loginUser(formData));

    if (state.isAuthenticated) {
      resetForm();
    }
    setSubmitting(false);
  };

  return (
    <div className='login'>
      <h2>
        Secure Login <FaLock />
      </h2>
      <img src={loginImg} alt='' />
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit} // Handle Form Validation
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string().required('Password is required'),
        })}
      >
        {({ isSubmitting }) => (
          <Form>
            <TextInput
              name='email'
              label='Email'
              type='email'
              placeholder='John@Doe.com'
            />
            <TextInput
              name='password'
              label='Password'
              type='password'
              placeholder='*********'
            />
            <button
              type='submit'
              disabled={state.loading || isSubmitting}
              className='btn'
            >
              {state.loading || isSubmitting ? 'Loading..' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
