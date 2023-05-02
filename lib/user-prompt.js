const inquirer = require('inquirer');
const { departmentQuery, departmentPrompt, insertDepartment } = require('../js/departments.js');
const { roleQuery, rolePrompt, insertRole } = require('../js/roles.js');
const { employeeQueryManager, employeeQueryDepartment, insertEmployee, employeePrompt } = require('../js/employees.js');
const js = require('../js/server.js');

const viewAll = (sql) => {
  js.query(sql, (err, result) => console.table(result));
  setTimeout(homePage, 1000);
}

const add = (questions, sqlFunction) => {
  return inquirer.prompt(questions)
  .then(sqlFunction)
  .then(homePage)
};

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
    switch (menu) {
      case 'View all departments':
        viewAll(departmentQuery);
        break;
      case 'View all roles':
        viewAll(roleQuery);
        break;
      case 'View all employees by manager':
        viewAll(employeeQueryManager);
        break;
      case 'View all employees by department':
        viewAll(employeeQueryDepartment);
        break;
      case 'Add a department':
        add(departmentPrompt, insertDepartment);
        break;
      case 'Add a role':
        add(rolePrompt, insertRole);
        break;
      case 'Add an employee':
        add(employeePrompt, insertEmployee);
        break;
      default:
        console.log('Invalid menu option');
    }
  })
};

module.exports = (homePage);