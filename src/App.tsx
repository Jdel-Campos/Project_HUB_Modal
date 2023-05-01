import React from "react";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
    <ToastContainer position="top-center" autoClose={2500} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false}
                    pauseOnFocusLoss draggable pauseOnHover theme="light"
    />
    </>
  );
};

export default App
