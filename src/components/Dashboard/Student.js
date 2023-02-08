import { useState, useEffect } from "react";
import axios from "axios";
import AddStudent from "./Student/AddStudent";
import EditStudent from "./Student/EditStudent";
import ViewStudent from "./Student/ViewStudent";

const Student = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
    id: "",
    std_name: "",
    std_email: "",
    std_phone: "",
    course: "",
    year_and_section: "",
    guardian_name: "",
    guardian_phone: "",
  });
  const [selectedStudent, setSelectedStudent] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    (async () => {
      const result = await axios.get("http://localhost:3010/student");
      setStudents(result.data);
    })();
  }, []);

  const handleAddStudent = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3010/student/", newStudent);
    const result = await axios.get("http://localhost:3010/student");
    setStudents(result.data);
    setNewStudent({
      id: "",
      std_name: "",
      std_email: "",
      std_phone: "",
      course: "",
      year_and_section: "",
      guardian_name: "",
      guardian_phone: "",
    });
  };

  const handleUpdateStudent = async (e) => {
    e.preventDefault();
    await axios.put(
      `http://localhost:3010/student/${selectedStudent.id}`,
      selectedStudent
    );
    const result = await axios.get("http://localhost:3010/student");
    setStudents(result.data);
    setSelectedStudent({});
    setIsEditing(false);
  };

  const handleDeleteStudent = async (id) => {
    const proceed = window.confirm("Are you sure?");
    if (!proceed) return;
    else {
      await axios.delete(`http://localhost:3010/student/${id}`);
      const result = await axios.get("http://localhost:3010/student");
      setStudents(result.data);
      setSelectedStudent({});
    }
  };

  return (
    <div>
      <h1>Student Records</h1>
      {isEditing ? (
        <EditStudent
          selectedStudent={selectedStudent}
          handleUpdateStudent={handleUpdateStudent}
          setIsEditing={setIsEditing}
          setSelectedStudent={setSelectedStudent}
        />
      ) : (
        <AddStudent
          handleAddStudent={handleAddStudent}
          newStudent={newStudent}
          setNewStudent={setNewStudent}
        />
      )}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Course</th>
            <th>Year and Section</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.std_name}</td>
              <td>{student.std_phone}</td>
              <td>{student.course}</td>
              <td>{student.year_and_section}</td>
              <td>
                <button onClick={() => setSelectedStudent(student)}>
                  View
                </button>
                <button
                  onClick={() => {
                    setSelectedStudent(student);
                    setIsEditing(true);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    handleDeleteStudent(student.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedStudent.id && (
        <ViewStudent
          selectedStudent={selectedStudent}
          setSelectedStudent={setSelectedStudent}
        />
      )}
    </div>
  );
};

export default Student;
