import { lazy } from "react";

import { Route, Routes } from "react-router-dom";

import AppContainer from "../components/AppContainer";

const Landing = lazy(() => import("./Landing"));
const Ebooks = lazy(() => import("../../Ebooks"));

const AppRoutes = () => {
  return (
    <AppContainer>
      <Routes>
        <Route index path="/" element={<Landing />} />

        <Route path="ebook-products/*" element={<Ebooks />} />
      </Routes>
    </AppContainer>
  );
};

export default AppRoutes;
