INSERT INTO department (names)
VALUES 
("IT"),
("Sales & Marketing"),
("Finance & Accounting"),
("Operations");

INSERT INTO roles (title, salary, department_id)
VALUES
("Full Stack Developer", 50000.00, 1),
("Software Engineer", 50000.00, 1 ),
("Accountant", 50000.00, 1 ), 
("Finanical Analyst", 50000.00, 1 ),
("Marketing Coordindator", 50000.00, 1 ), 
("Sales Lead", 50000.00, 1),
("Project Manager", 50000.00, 1 ),
("Operations Manager", 50000.00, 1 );

INSERT INTO employee (first_name, last_name, roles_id, manager_id)
VALUES 
("John", "Doe", 1, 1);
("John", "Loe", 2, 2);
("John", "Foe", 3, 3);
("John", "Joe", 4, 4);
("John", "Poe", 5, 5);
