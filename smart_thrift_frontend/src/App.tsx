import { FC } from 'react';
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
import { Routes } from './router/routes';

const App: FC = () => {
  return (
    <>
      <div className=''></div>
      <RouterProvider router={Routes} />
      <ToastContainer />
    </>
  );
};

export default App;
