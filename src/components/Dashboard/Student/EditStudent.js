const EditStudent = ({
  selectedStudent,
  handleUpdateStudent,
  setSelectedStudent,
  setIsEditing,
}) => {
  return (
    <form onSubmit={handleUpdateStudent}>
      <h2>Edit Student</h2>
      <input
        type="text"
        placeholder="Name"
        value={selectedStudent.std_name}
        onChange={(e) =>
          setSelectedStudent({ ...selectedStudent, std_name: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Email"
        value={selectedStudent.std_email}
        onChange={(e) =>
          setSelectedStudent({ ...selectedStudent, std_email: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Phone"
        value={selectedStudent.std_phone}
        onChange={(e) =>
          setSelectedStudent({ ...selectedStudent, std_phone: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Course"
        value={selectedStudent.course}
        onChange={(e) =>
          setSelectedStudent({ ...selectedStudent, course: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Year and Section"
        value={selectedStudent.year_and_section}
        onChange={(e) =>
          setSelectedStudent({
            ...selectedStudent,
            year_and_section: e.target.value,
          })
        }
      />
      <input
        type="text"
        placeholder="Guardian Name"
        value={selectedStudent.guardian_name}
        onChange={(e) =>
          setSelectedStudent({
            ...selectedStudent,
            guardian_name: e.target.value,
          })
        }
      />
      <input
        type="text"
        placeholder="Guardian Phone"
        value={selectedStudent.guardian_phone}
        onChange={(e) =>
          setSelectedStudent({
            ...selectedStudent,
            guardian_phone: e.target.value,
          })
        }
      />

      <button type="submit">Update Student</button>
      <button onClick={() => setIsEditing(false)}>Cancel</button>
    </form>
  );
};

export default EditStudent;
