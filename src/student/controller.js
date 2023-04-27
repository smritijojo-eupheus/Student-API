const pool = require("../../db");
const Query = require("./queries");
const getstudent = (req, res) => {
  pool.query(Query.getStudentQuery, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getstudentId = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(Query.getStudentByIdQuery, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getcheckStudentEmail = (req, res) => {
  const { name, email, age, dob } = req.body;
  pool.query(Query.checkStudentEmail, [email], (error, results) => {
    if (results.rows.length) {
      res.send("email already exists");
    } else {
      pool.query(
        Query.addStudent,
        [name, email, age, dob],
        (error, results) => {
          res.status(201).send("student created successfully");
        }
      );
    }
  });
};

const getDeleteStudentId = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(Query.getStudentByIdQuery, [id], (error, results) => {
    if (!results.rows.length) {
      res.send("student does not exist in database");
    }
    pool.query(Query.deleteStudentId, [id], (error, results) => {
      res.status(200).send("student deleted successfully");
    });
  });
};

const getChangeStudentId = (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  pool.query(Query.getStudentByIdQuery, [id], (error, results) => {
    if (!results.rows.length) {
      res.send("student doesn't exists");
    }
    pool.query(Query.getPutStudentId, [name], (error, results) => {
      if (error) throw error;
      res.status(201).send("Updated student name successfully");
    });
  });
};

module.exports = {
  getstudent,
  getstudentId,
  getcheckStudentEmail,
  getDeleteStudentId,
  getChangeStudentId,
};
