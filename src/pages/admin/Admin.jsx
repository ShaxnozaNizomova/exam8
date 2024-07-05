import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import { Outlet } from "react-router-dom";
import "./Admin.scss";

const Admin = () => {
  return (
    <div className="admin__layout">
      <SideBar />
      <div className="admin__content">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
