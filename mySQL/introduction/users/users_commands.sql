INSERT INTO users (first_name, last_name, email, created_at, updated_at)
VALUES ("John", "Doe", "johb@dojo.com", NOW(), NOW()),
	   ("Jane", "Doe", "jane@dojo.com", NOW(), NOW()),
	   ("Jim", "Bo", "jim@dojo.com", NOW(), NOW());
       
SELECT * FROM users;

SELECT * FROM users WHERE email = "johb@dojo.com";

SELECT * FROM users WHERE id = 4;

UPDATE users SET last_name = "Pancakes" WHERE id = 3;

DELETE FROM users WHERE id = 2;

SELECT * FROM users ORDER BY first_name;

SELECT * FROM users ORDER BY first_name DESC;