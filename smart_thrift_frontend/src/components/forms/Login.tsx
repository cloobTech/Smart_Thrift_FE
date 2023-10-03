// import {FC} from 'react'
// import {Formik, Form} from 'formik'
// import CustomInput from './formElements'

// const Login:FC = () => {
//   return (
//     <div>
//         Login

//         <Formik>
            
//         </Formik>


//     </div>
//   )
// }

// export default Login

import React from 'react';
import { Formik, Form } from 'formik';
import {TextInput} from './formElements';

const MyForm: React.FC = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) => {
        // Handle form submission here
        console.log(values);
      }}
      // Add validation schema using Yup if needed
      // validationSchema={yourValidationSchema}
    >
      <Form>
        <TextInput
          name='email'
          label='Email'
          type='email'
          placeholder='Enter your email'
        />
        <TextInput
          name='password'
          label='Password'
          type='password'
          placeholder='Enter your password'
        />
        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
};

export default MyForm;

