const ViewStudent = ({ selectedStudent }) => (
  <div>
    <h2>{selectedStudent.std_name}</h2>
    <p>Email: {selectedStudent.std_email}</p>
    <p>Phone: {selectedStudent.std_phone}</p>
    <p>Course: {selectedStudent.course}</p>
    <p>Year and Section: {selectedStudent.year_and_section}</p>
    <p>Guardian Name: {selectedStudent.guardian_name}</p>
    <p>Guardian Phone: {selectedStudent.guardian_phone}</p>
  </div>
);

export default ViewStudent;
