import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "../NotFoundPage";
import GlobalLayout from "../../components/layouts/Home/GlobalLayout";
// import PrivateRoute from "../../routes/PrivateRoute";

const Home = ({ onChangePassword }) => {
  return (
    <GlobalLayout>
      <Routes>
        {/* <Route path="" element={<PrivateRoute />}> */}
        <Route exact path="/" element={<div>Home page</div>} />
        <Route path="" component={<NotFoundPage />} />
        {/* </Route> */}
      </Routes>
    </GlobalLayout>
  );
};

export default Home;
