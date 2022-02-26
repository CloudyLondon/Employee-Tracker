INSERT INTO department(id, name)
VALUES (1, "Admin"), (2, "Finance"), (3, "HR"), (4, "Customer Service"), (5, "IT");

INSERT INTO role(id, title, salary, department_id)
VALUES   (1, "Big Boss", 2000000, 1),
  (2, "Another Boss", 100000, 2),
  (3, "One More boss", 200000, 3),
  (4, "Boss' Assistant", 100000, 3),
  (5, "Customer Service", 9500, 4),
  (6, "IT guy", 120000000, 5),
  (7, "IT guy's assistent", 10000000, 5),
  (8, "Boss Developer", 15000000, 5),
  (9, "Senior Developer", 10000000, 5),
  (10, "Developing Intern", 800000, 5),
  (11, "Marketing Boss", 2000000, 4),
  (12, "Marketing Assistant", 10000000, 4),
  (13, "Customer Service Boss", 10000000, 4);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES   ('Ronald', 'Ho', 1, NULL),
  ('Virginia', 'Chan', 2, NULL),
  ('Piers', 'Lee', 2, 1),
  ('Charles', 'Cheng', 3, NULL),
  ('Katherine', 'Wong', 4, 4),
  ('Dora', 'Tian', 13, NULL),
  ('Edward', 'Yip', 6, NULL),
  ('Montague', 'Yuk', 4, 4),
  ('Octavia', 'Takoma', 5, 6),
  ('Unica', 'Yuruzu', 4, 4),
  ("Orla", "Park", 7, 4),
  ("Alysia", "Kim", 8, NULL),
  ("Edwin","Yeung", 9, 12),
  ("Otto", "Nguyen", 10, 12),
  ("Jeffery", "Ng", 11, NULL),
  ("Regan", "Chau", 12, 16),
  ("Kaia", "Choi", 12, 16);