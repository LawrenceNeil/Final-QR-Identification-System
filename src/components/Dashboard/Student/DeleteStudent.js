const DeleteStudent = ({ selectedStudent, handleDeleteStudent }) => (
  <div>
    <p>Are you sure you want to delete the student: {selectedStudent.name}?</p>
    <button onClick={handleDeleteStudent}>Yes</button>
    <button onClick={() => setSelectedStudent({})}>No</button>
  </div>
);

export default DeleteStudent;
