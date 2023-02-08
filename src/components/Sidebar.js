import {
  BiCalendarEdit,
  BiFolder,
  BiLogOut,
  BiQr,
  BiScan,
} from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { IoQrCode, IoQrCodeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { SidebarContainer } from "../styles/Sidebar.styled";
import { useSignOut } from "react-auth-kit";

function Sidebar() {
  const signOut = useSignOut();
  const Navigate = useNavigate();
  const [qr, setQr] = useState(false);
  const [record, setRecord] = useState(false);
  const handleQr = () => {
    setQr(!qr);
  };
  const handleRecord = () => {
    setRecord(!record);
  };

  const handleLogout = () => {
    signOut();

    window.location.href = "/";
  };

  return (
    <SidebarContainer>
      <div className="logo">
        <div className="logo-icon">
          <IoQrCodeOutline />
        </div>
        <div className="logo-text">
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </div>
      <div className="menu">
        <div className="menu-item" onClick={handleQr}>
          <div className="menu-item-icon">
            <BiQr />
          </div>
          <div className="menu-item-text">QR</div>
        </div>
        {qr ? (
          <div className="sub-menu">
            <div
              className="menu-item"
              onClick={() => {
                Navigate("/dashboard/scan");
              }}
            >
              <div className="menu-item-icon">
                <BiScan />
              </div>
              <div className="menu-item-text">Scan</div>
            </div>
            <div
              className="menu-item"
              onClick={() => {
                Navigate("/dashboard/generate");
              }}
            >
              <div className="menu-item-icon">
                <IoQrCode />
              </div>
              <div className="menu-item-text">Generate</div>
            </div>
          </div>
        ) : null}
        <div className="menu-item" onClick={handleRecord}>
          <div className="menu-item-icon">
            <BiFolder />
          </div>
          <div className="menu-item-text">Record</div>
        </div>

        {record ? (
          <div className="sub-menu">
            <div
              className="menu-item"
              onClick={() => {
                Navigate("/dashboard/student");
              }}
            >
              <div className="menu-item-icon">
                <FaUsers />
              </div>
              <div className="menu-item-text">Student</div>
            </div>
            <div
              className="menu-item"
              onClick={() => {
                Navigate("/dashboard/attendance");
              }}
            >
              <div className="menu-item-icon">
                <BiCalendarEdit />
              </div>
              <div className="menu-item-text">Attendance</div>
            </div>
          </div>
        ) : null}
        <div className="menu-item" onClick={handleLogout}>
          <div className="menu-item-icon">
            <BiLogOut />
          </div>
          <div className="menu-item-text">Logout</div>
        </div>
      </div>
    </SidebarContainer>
  );
}

export default Sidebar;
