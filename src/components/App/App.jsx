import { useSelector } from 'react-redux';
import { selectError } from 'redux/selectors';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PhoneApp } from 'components/PhoneApp/PhoneApp';

 const App = () => {
  const error = useSelector(selectError);

  if (error) {
    toast.error(error);
  }

  return (
    <>
      <ToastContainer
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
      />
      <PhoneApp />
    </>
  );
};

export default App;