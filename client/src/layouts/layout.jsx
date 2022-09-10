import React from "react";
import Header from "../components/Header/header.component";
import Footer from "../components/Footer/footer.component";
import { Outlet } from "react-router-dom";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main style={{ minHeight: "90vh" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
