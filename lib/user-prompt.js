const inquirer = require('inquirer');
const { departmentQuery, departmentPrompt, insertDepartment } = require('../js/departments.js');
const { roleQuery, rolePrompt, insertRole } = require('../js/roles.js');
const { employeeQueryManager, employeeQueryDepartment, insertEmployee, employeePrompt } = require('../js/employees.js');
const js = require('../js/server.js');

const homePage = () => {
  return inquirer.prompt([
    {
      name: 'menu',
      message: 'What would you like to do (Choose one of the)?',
      type: 'list',
      choices: [
        new inquirer.Separator('-----VIEW TABLES-----'),
        'View all departments',
        'View all roles',
        'View all employees by manager',
        'View all employees by department',
        new inquirer.Separator('-----ADD TO TABLES-----'),
        'Add a department',
        'Add a role',
        'Add an employee',
      ]
    }
  ])
  .then(({ menu }) => {
    if (menu === 'View all departments') {viewAll(departmentQuery)}
    if (menu === 'View all roles') {viewAll(roleQuery)}
    if (menu === 'View all employees by manager') {viewAll(employeeQueryManager)}
    if (menu === 'View all employees by department') {viewAll(employeeQueryDepartment)}
    if (menu === 'Add a department') {add(departmentPrompt, insertDepartment)}
    if (menu === 'Add a role') {add(rolePrompt, insertRole)}
    if (menu === 'Add an employee') {add(employeePrompt, insertEmployee)}
  })
}

const viewAll = (sql) => {
  js.query(sql, (err, result) => console.table(result));
  setTimeout(homePage, 1000);
}

const add = (questions, sqlFunction) => {
  return inquirer.prompt(questions)
  .then(sqlFunction)
  .then(homePage)
};
module.exports = (homePage);