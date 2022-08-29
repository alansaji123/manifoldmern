import React from "react";
import Header from "../components/Header/header.component";
import Footer from "../components/Footer/footer.component";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main style={{ minHeight: "90vh" }}>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
