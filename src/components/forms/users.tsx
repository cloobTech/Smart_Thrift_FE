import React from 'react';
import '../../styles/forms/users.css';
import { Formik, Form } from 'formik';
import { TextInput, Radio, Checkbox } from './formElements';
import { FaPiggyBank, FaExclamationTriangle } from 'react-icons/fa';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { newUser, updateUser } from '../../store/slices/usersSlice';
import { toast } from 'react-toastify';

interface UpdateUserSchema {
  email: string;
  first_name: string;
  last_name: string;
  slot: number;
  registered: boolean;
  role: string;
  id: string;
  closeModal: () => void;
}

// Create
export const Membership: React.FC = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state: any) => state.auth);
  const { loading, error } = useSelector((state: any) => state.users);

  const initialValues = {
    email: '',
    password: '123456',
    first_name: '',
    last_name: '',
    slot: 1,
    registered: false,
    role: 'member',
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().required('Required'),
    last_name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Password is required'),
  });

  const handleFormSubmittion = async (
    values: any,
    // @ts-ignore
    { setSubmitting, resetForm }
  ) => {
    const { first_name, last_name, email, password, slot, registered, role } =
      values;
    const user_dict = {
      user: {
        email,
        password,
      },

      profile: {
        first_name,
        last_name,
        slot,
        registered,
        role,
      },
    };

    try {
      // @ts-ignore
      dispatch(newUser({ token, value: user_dict }));
      // @ts-ignore
      if (!loading && error === null) resetForm();
    } catch (error) {
      toast.error('An Error Occured');
    } finally {
      setSubmitting();
    }
  };

  return (
    <div className='membership'>
      <section className='heading'>
        <h3>
          <FaPiggyBank />
          smarter way to save
        </h3>

        <h2>Membership Form</h2>
      </section>

      <section className='form-groups'>
        {/* @ts-ignore */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmittion}
        >
          {() => (
            <Form>
              <TextInput
                name='first_name'
                label='First Name'
                type='text'
                placeholder='John'
              />
              <TextInput
                name='last_name'
                label='Last Name'
                type='text'
                placeholder='Doe'
              />
              <TextInput
                name='email'
                label='Email'
                type='email'
                placeholder='John@Doe.com'
              />
              <TextInput
                name='password'
                label='Password'
                type='text'
                placeholder='*********'
                // @ts-ignore
                value='123456'
              />
              <TextInput
                name='slot'
                label='Slot'
                type='number'
                placeholder='Maximun of 4 Slot'
                // @ts-ignore
                min='1'
                max='4'
              />
              <div className='form-group check-box'>
                {/* <p>Registered?</p> */}
                {/* @ts-ignore */}
                <Checkbox name='registered'> Registered? </Checkbox>
              </div>
              <div className='radio-btns form-group'>
                <h3>Role</h3>
                <Radio name='role' value='member'>
                  member
                </Radio>
                <Radio name='role' value='admin'>
                  admin
                </Radio>
                <Radio name='role' value='owner'>
                  owner
                </Radio>
              </div>
              <div className='btn-container'>
                <p>
                  <FaExclamationTriangle />
                  ATTENTION! Verify all inputs before submitting
                </p>
                <button className='btn' type='submit' disabled={loading}>
                  {loading ? 'Loading' : 'Submit'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </section>
    </div>
  );
};

// Update
// @ts-ignore
export const UpdateUser: React.FC<UpdateUserSchema> = ({
  first_name,
  last_name,
  registered,
  role,
  slot,
  id,
  email,
  closeModal,
}) => {
  const dispatch = useDispatch();
  const { token } = useSelector((state: any) => state.auth);
  const { loading, error } = useSelector((state: any) => state.users);

  const initialValues = {
    first_name,
    last_name,
    slot,
    registered,
    role,
    email,
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().required('Required'),
    last_name: Yup.string().required('Required'),
  });

  const handleFormSubmittion = async (
    value: any,
    // @ts-ignore
    { setSubmitting, resetForm }
  ) => {
    try {
      // @ts-ignore

      dispatch(updateUser({ token, value, id }));
      // @ts-ignore
      if (!loading && error === null) {
        resetForm();
        closeModal();
      }
    } catch (error) {
      toast.error('An Error Occured');
    } finally {
      setSubmitting();
    }
  };

  return (
    <div className='membership edit-user'>
      <section className='heading'>
        <h3>
          <FaPiggyBank />
          smarter way to save
        </h3>

        <h2 className='warning'>Update User Info</h2>
      </section>

      <section className='form-groups'>
        {/* @ts-ignore */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmittion}
        >
          {() => (
            <Form>
              <TextInput
                name='first_name'
                label='First Name'
                type='text'
                placeholder='John'
              />
              <TextInput
                name='last_name'
                label='Last Name'
                type='text'
                placeholder='Doe'
              />
              <TextInput
                name='email'
                label='Email'
                type='email'
                placeholder='John@Doe.com'
                // @ts-ignore
                readOnly
              />

              <TextInput
                name='slot'
                label='Slot'
                type='number'
                placeholder='Maximun of 4 Slot'
                // @ts-ignore
                min='1'
                max='4'
                readOnly
              />
              <div className='radio-btns form-group'>
                <h3>Role</h3>
                <Radio name='role' value='member'>
                  member
                </Radio>
                <Radio name='role' value='admin'>
                  admin
                </Radio>
                <Radio name='role' value='owner'>
                  owner
                </Radio>
              </div>
              <div className='form-group check-box'>
                {/* <p>Registered?</p> */}
                {/* @ts-ignore */}
                <Checkbox name='registered'> Registered? </Checkbox>
              </div>
              <div className='btn-container'>
                <button
                  className='btn update-user'
                  type='submit'
                  disabled={loading}
                >
                  {loading ? 'Loading' : 'Save'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </section>
    </div>
  );
};
