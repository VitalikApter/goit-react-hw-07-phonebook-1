import { useSelector } from 'react-redux';
import { selectError } from 'components/redux/selectors';
import {  toast } from 'react-toastify';

import { PhoneApp } from 'components/PhoneApp/PhoneApp';

export const App = () => {
  const error = useSelector(selectError);

  if (error) {
    toast.error(error);
  }

  return (
    <>
      {/* <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      /> */}
      <PhoneApp />
    </>
  );
};