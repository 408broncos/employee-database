const db = require('./server.js');

const employeeQueryManager = `
    SELECT a.id, a.first_name, a.last_name, roles.title AS role, departments.name AS department, roles.salary AS salary, CONCAT_WS(' ', b.first_name, b.last_name) AS manager
    FROM employees a
    LEFT JOIN employees b ON a.manager_id = b.id
    LEFT JOIN roles ON a.role_id = roles.id
    LEFT JOIN departments ON roles.department_id = departments.id
    ORDER BY manager
  `;
const employeeQueryDepartment = `
    SELECT a.id, a.first_name, a.last_name, roles.title AS role, departments.name AS department, roles.salary AS salary, CONCAT_WS(' ', b.first_name, b.last_name) AS manager
    FROM employees a
    LEFT JOIN employees b ON a.manager_id = b.id
    LEFT JOIN roles ON a.role_id = roles.id
    LEFT JOIN departments ON roles.department_id = departments.id
    ORDER BY department
  `;
const insertEmployee = ({ firstName, lastName, employeerole, managerConfirmation, managerName }) => {
    let managerId;
    if (!managerConfirmation) {
        managerId = null;
    } else {
        managerId = getId(managerName);
    }
    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, (SELECT id FROM roles WHERE title = ?), ?)`;
    const parameters = [firstName, lastName, employeerole, managerId];
    db.query(sql, parameters, (err, res) => {
        if (err) {
            console.log(err);
        }
        console.log(`Employee added: ${firstName} ${lastName}`);
    });
};

const employeePrompt = [
    {
        name: 'firstName',
        message: "What is the employee's first name?",
        type: 'input'
    },
    {
        name: 'lastName',
        message: "What is the employee's last name?",
        type: 'input'
    },
    {
        name: 'employeerole',
        message: "What is the employee's role?",
        type: 'list',
        choices: ['Sales Manager', 'Sales Representative', 'Software Engineer', 'Web Developer', 'Marketing Manager', 'Marketing Coordinator', 'HR Manager', 'HR Assistant']
    },
    {
        name: 'managerConfirmation',
        message: 'Is there a manager for this employee?',
        type: 'confirm',
        default: true
    },
    {
        name: 'managerName',
        message: "Who is the employee's manager?",
        type: 'list',
        choices: ['John Deer', 'Justin Bieber', 'Katy Perry', 'Dwight Schrute', 'Black Adam', 'Walter White', 'Bugs Bunny', 'Bond James'],
        when: ({ managerConfirmation }) => managerConfirmation
    }
];

const getId = (employeeNumber) => {
    const idForEmployees = {
        'John Deer': 1,
        'Justin Bieber': 2,
        'Katy Perry': 3,
        'Dwight Schrute': 4,
        'Black Adam': 5,
        'Walter White': 6,
        'Bugs Bunny': 7,
        'Bond James': 8
    };
    return idForEmployees[employeeNumber];
};

module.exports = {
    employeeQueryManager,
    employeePrompt,
    employeeQueryDepartment,
    insertEmployee
};