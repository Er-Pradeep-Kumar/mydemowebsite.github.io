import React from "react";
import NotLoggedInDesktop from "pages/NotLoggedInDesktop";
import LoggedInUserScrolledFollowGroupsClicked from "pages/LoggedInUserScrolledFollowGroupsClicked";
import LoggedInUserScrolledLocationEditEnabled from "pages/LoggedInUserScrolledLocationEditEnabled";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
import Register from "pages/Register/Register";
import Login from "pages/Login/Login";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="*" element={<NotFound />} />
        <Route
          path="/loggedinuserscrolledlocationeditenabled"
          element={<LoggedInUserScrolledLocationEditEnabled />}
        />
        <Route
          path="/loggedinuserscrolledfollowgroupsclicked"
          element={<LoggedInUserScrolledFollowGroupsClicked />}
        />
        <Route path="/" element={<NotLoggedInDesktop />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
