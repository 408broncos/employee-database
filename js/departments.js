const js = require('./server.js');

const departmentQuery = `SELECT * FROM departments`;

const insertDepartment = ({ departmentName }) => {
  const sql = `INSERT INTO departments (name) VALUES (?)`;
  const parameters = [departmentName];
  js.query(sql, parameters, (err, res) => {});
};

const departmentPrompt = [
  {
    name: 'departmentName',
    message: 'What department are you looking for?',
    type: 'input'
  }
];

module.exports = {
  departmentQuery,
  departmentPrompt,
  insertDepartment
};