import { useState } from "react";
import { Outlet } from "react-router-dom";
import { DashSection } from "../styles/Dashboard.styled";
import Sidebar from "./Sidebar";
function Dashboard() {
  return (
    <DashSection>
      <div className="container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </DashSection>
  );
}

export default Dashboard;
