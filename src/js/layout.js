import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";

import { Home } from "./views/home";
import { Details } from "./views/details"; // Nueva vista.
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/details/:type/:id" element={<Details />} />
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default injectContext(Layout);