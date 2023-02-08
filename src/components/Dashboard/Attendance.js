import { useState, useEffect } from "react";
import axios from "axios";

function Attendance() {
  const [attendance, setAttendance] = useState([]);
  const [newAttendance, setNewAttendance] = useState({
    hashed_id: "",
  });
  const [selectedAttendance, setSelectedAttendance] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    (async () => {
      const result = await axios.get("http://localhost:3010/attendance");
      setAttendance(result.data);
    })();
  }, []);

  const handleAddAttendance = async (e) => {
    console.log(newAttendance);
    e.preventDefault();
    await axios.post("http://localhost:3010/attendance/", newAttendance);
    const result = await axios.get("http://localhost:3010/attendance");
    setAttendance(result.data);
    setNewAttendance({
      hashed_id: "",
    });
  };

  const handleUpdateAttendance = async (e) => {
    e.preventDefault();
    await axios.put(
      `http://localhost:3010/attendance/${selectedAttendance.id}`,
      selectedAttendance
    );
    const result = await axios.get("http://localhost:3010/attendance");
    setAttendance(result.data);
    setSelectedAttendance({});
    setIsEditing(false);
  };

  const handleDeleteAttendance = async (id) => {
    const proceed = window.confirm("Are you sure?");
    if (!proceed) return;
    else {
      await axios.delete(`http://localhost:3010/attendance/${id}`);
      const result = await axios.get("http://localhost:3010/attendance");
      setAttendance(result.data);
      setSelectedAttendance({});
    }
  };
  const formatDate = (date) => {
    const d = new Date(date);
    const month = d.getMonth() + 1;
    const day = d.getDate();
    const year = d.getFullYear();
    return `${year}-${month}-${day}`;
  };
  return (
    <>
      <h1>Attendance Records</h1>
      {isEditing ? (
        <form onSubmit={handleUpdateAttendance}>
          <input
            type="text"
            value={selectedAttendance.date}
            onChange={(e) =>
              setSelectedAttendance({
                ...selectedAttendance,
                date: e.target.value,
              })
            }
          />
          <input
            type="text"
            value={selectedAttendance.time}
            onChange={(e) =>
              setSelectedAttendance({
                ...selectedAttendance,
                time: e.target.value,
              })
            }
          />
          <input
            type="text"
            value={selectedAttendance.status}
            onChange={(e) =>
              setSelectedAttendance({
                ...selectedAttendance,
                status: e.target.value,
              })
            }
          />
          <button type="submit">Update</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      ) : (
        <form onSubmit={handleAddAttendance}>
          <input
            type="text"
            placeholder="ID"
            value={newAttendance.hashed_id}
            onChange={(e) =>
              setNewAttendance({
                ...newAttendance,
                hashed_id: e.target.value,
              })
            }
          />
          <button type="submit">Add Attendance</button>
        </form>
      )}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Student ID</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {attendance.map((attendance) => (
            <tr key={attendance.id}>
              <td>{attendance.id}</td>
              <td>{attendance.hashed_id}</td>
              <td>{formatDate(attendance.date)}</td>
              <td>{attendance.time}</td>
              <td>{attendance.status}</td>
              <td>
                <button
                  onClick={() => {
                    setSelectedAttendance(attendance);
                    setIsEditing(true);
                  }}
                >
                  Edit
                </button>
                <button onClick={() => handleDeleteAttendance(attendance.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Attendance;
