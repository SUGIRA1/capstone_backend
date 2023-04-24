import React from "react";
import Head from "next/head";
import { ToastContainer } from "react-toastify";

const AuthLayout = ({ children }) => {
  return (
    <>
      <ToastContainer />
      <Head>
        <title>Fiinanza</title>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className="header">
        <div className="header-logo">Fiinanza Business</div>
      </header>
      {children}
    </>
  );
};

export default AuthLayout;
