const AddStudent = ({ handleAddStudent, newStudent, setNewStudent }) => (
  <form onSubmit={handleAddStudent}>
    <input
      type="text"
      placeholder="ID"
      value={newStudent.id}
      onChange={(e) => setNewStudent({ ...newStudent, id: e.target.value })}
    />
    <input
      type="text"
      placeholder="Name"
      value={newStudent.std_name}
      onChange={(e) =>
        setNewStudent({ ...newStudent, std_name: e.target.value })
      }
    />
    <input
      type="text"
      placeholder="Email"
      value={newStudent.std_email}
      onChange={(e) =>
        setNewStudent({ ...newStudent, std_email: e.target.value })
      }
    />
    <input
      type="text"
      placeholder="Phone"
      value={newStudent.std_phone}
      onChange={(e) =>
        setNewStudent({ ...newStudent, std_phone: e.target.value })
      }
    />
    <input
      type="text"
      placeholder="Course"
      value={newStudent.course}
      onChange={(e) => setNewStudent({ ...newStudent, course: e.target.value })}
    />
    <input
      type="text"
      placeholder="Year and Section"
      value={newStudent.year_and_section}
      onChange={(e) =>
        setNewStudent({ ...newStudent, year_and_section: e.target.value })
      }
    />
    <input
      type="text"
      placeholder="Guardian Name"
      value={newStudent.guardian_name}
      onChange={(e) =>
        setNewStudent({ ...newStudent, guardian_name: e.target.value })
      }
    />
    <input
      type="text"
      placeholder="Guardian Phone"
      value={newStudent.guardian_phone}
      onChange={(e) =>
        setNewStudent({ ...newStudent, guardian_phone: e.target.value })
      }
    />
    <button type="submit">Add Student</button>
  </form>
);

export default AddStudent;
