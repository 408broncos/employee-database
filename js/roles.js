const js = require('./server.js');

const roleQuery = `SELECT roles.id, roles.title, roles.salary, departments.name AS department
              FROM roles
              LEFT JOIN departments ON roles.department_id = departments.id`;
  const insertRole = ({ roleName, salary, department }) => {
    const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, (SELECT id FROM departments WHERE name = ?))`;
    const parameters = [roleName, salary, department];
    js.query(sql, parameters);
  };

const departmentQuery = {
  selectAll: `SELECT * FROM departments`,
  insert: ({ departmentName }) => {
    const sql = `INSERT INTO departments (name) VALUES (?)`;
    const parameters = departmentName;
    js.query(sql, parameters);
  }
};

const rolePrompt = [
  {
    name: 'roleName',
    message: 'What is the name of the role?',
    type: 'input'
  },
  {
    name: 'salary',
    message: 'Enter a salary number for this role',
    type: 'input'
  },
  {
    name: 'department',
    message: 'What department is this role in?',
    type: 'list',
    choices: ['Sales', 'Engineering', 'Marketing', 'Human Resources']
  }
];

module.exports = {
  roleQuery,
  departmentQuery,
  rolePrompt,
  insertRole
};