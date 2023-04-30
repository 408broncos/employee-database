INSERT INTO departments (name) 
VALUES ('Sales'),
       ('Engineering'),
       ('Marketing'),
       ('Human Resources');

INSERT INTO roles (title, salary, department_id) 
VALUES ('Sales Manager', 100000, 1),
       ('Sales Representative', 70000, 1),
       ('Software Engineer', 100000, 2),
       ('Web Developer', 90000, 2),
       ('Marketing Manager', 85000, 3),
       ('Marketing Coordinator', 50000, 3),
       ('HR Manager', 80000, 4),
       ('HR Assistant', 40000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id) 
VALUES ('John', 'Deer', 1, NULL),
       ('Justin', 'Bieber', 2, 1),
       ('Katy', 'Perry', 3, NULL),
       ('Dwight', 'Schrute', 4, 3),
       ('Black', 'Adam', 5, NULL),
       ('Walter', 'White', 6, 5),
       ('Bugs', 'Bunny', 7, NULL),
       ('Bond', 'James', 8, 7);