const getStudentQuery = "SELECT * FROM students ";
const getStudentByIdQuery = "SELECT * FROM students WHERE id=$1";
const checkStudentEmail = "SELECT s from students s WHERE s.email=$1";
const addStudent =
  "INSERT INTO students(name, email, age, dob)VALUES($1,$2,$3,$4)";

const deleteStudentId = "DELETE FROM students WHERE id=$1";
const getPutStudentId = "UPDATE students SET name=$1";

module.exports = {
  getStudentQuery,
  getStudentByIdQuery,
  checkStudentEmail,
  addStudent,
  deleteStudentId,
  getPutStudentId,
};
