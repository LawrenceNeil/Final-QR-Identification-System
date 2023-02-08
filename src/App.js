import { Routes, Route } from "react-router-dom";
import { RequireAuth } from "react-auth-kit";
import Login from "./routes/Login";
import Maindash from "./components/Dashboard/Maindash";
import QRscan from "./components/Dashboard/QRscan";
import Dashboard from "./components/Dashboard";
import QRgenerate from "./components/Dashboard/QRgenerate";
import Student from "./components/Dashboard/Student";
import Attendance from "./components/Dashboard/Attendance";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth loginPath={"/"}>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route path="" element={<Maindash />} />
          <Route path="scan" element={<QRscan />} />
          <Route path="generate" element={<QRgenerate />} />
          <Route path="student" element={<Student />} />
          <Route path="attendance" element={<Attendance />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
