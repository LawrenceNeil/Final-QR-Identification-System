const db = require("../data/dbconfig");
const crypto = require("crypto");
const fs = require("fs");

exports.hash = (req, res) => {
  const { hashed_id } = req.body;

  const getStudent = `SELECT * FROM students WHERE hashed_id = '${hashed_id}'`;

  db.query(getStudent, (err, results, field) => {
    if (err) console.log(err);
    console.log(results);
    if (results.length > 0) {
      res.json({
        message: "Student found",
        id: results[0].id,
        std_name: results[0].std_name,
        std_email: results[0].std_email,
        std_phone: results[0].std_phone,
        course: results[0].course,
        year_and_section: results[0].year_and_section,
        guardian_name: results[0].guardian_name,
        guardian_phone: results[0].guardian_phone,
      });
    }
  });
};
exports.create = (req, res) => {
  const {
    id,
    std_name,
    std_email,
    std_phone,
    course,
    year_and_section,
    guardian_name,
    guardian_phone,
  } = req.body;
  const hashed_id = crypto.createHash("sha256").update(id).digest("hex");
  const createStudent = `
    INSERT INTO students (id, std_name, std_email, std_phone, course, year_and_section, guardian_name, guardian_phone, hashed_id)
    VALUES ('${id}', '${std_name}', '${std_email}', '${std_phone}', '${course}', '${year_and_section}', '${guardian_name}', '${guardian_phone}', '${hashed_id}')
  `;

  db.query(createStudent, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(hashed_id);

      res.json({ message: "Student created" });
    }
  });
};

exports.read = (req, res) => {
  const student = students.find((student) => student.id == req.params.id);
  if (!student) {
    res.status(404).json({ message: "Student not found" });
  }
  res.json(student);
};

exports.readall = (req, res) => {
  const getAllstudents = "SELECT * FROM students";
  db.query(getAllstudents, (err, result) => {
    if (err) console.log(err);
    res.json(result);
  });
};

exports.update = (req, res) => {
  const {
    std_name,
    std_email,
    std_phone,
    course,
    year_and_section,
    guardian_name,
    guardian_phone,
  } = req.body;

  const updateStudent = `
    UPDATE students
    SET std_name = '${std_name}', std_email = '${std_email}', std_phone = '${std_phone}', course = '${course}', year_and_section = '${year_and_section}', guardian_name = '${guardian_name}', guardian_phone = '${guardian_phone}'
    WHERE id = '${req.params.id}'
  `;
  db.query(updateStudent, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.json({ message: "Student updated" });
    }
  });
};

exports.remove = (req, res) => {
  const id = req.params.id;
  console.log(id);
  const deleteStudent = `DELETE FROM students WHERE id = '${id}'`;
  db.query(deleteStudent, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ message: "Student deleted" });
    }
  });
};

exports.like = (req, res) => {
  const { idLike } = req.body;
  const search = ` SELECT * FROM students WHERE id LIKE '${idLike}' `;

  db.query(search, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
};
