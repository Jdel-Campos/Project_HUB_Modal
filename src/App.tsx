import React from "react";
import { ToastContainer } from "react-toastify";
import { GlobalStyles } from "./styles/globalStyle";
import { ResetStyles } from "./styles/reset";
import { Router } from "./routes/routes"


const App = () => {
  return (
    <>
      <ToastContainer position="top-center" autoClose={2500} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false}
                      pauseOnFocusLoss draggable pauseOnHover theme="light" />

      <GlobalStyles />
      <ResetStyles />

      <Router />

    </>
  );
};

export default App
