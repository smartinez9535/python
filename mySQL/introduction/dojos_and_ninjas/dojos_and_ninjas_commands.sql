INSERT INTO dojos (name, created_at, updated_at)
VALUES ("West Dojo", NOW(), NOW()),
	   ("East Dojo", NOW(), NOW()),
	   ("North Dojo", NOW(), NOW());
       
DELETE FROM dojos LIMIT 3;
-- order by id desc
    
INSERT INTO dojos (name, created_at, updated_at)
VALUES ("North-West Dojo", NOW(), NOW()),
	   ("North-East Dojo", NOW(), NOW()),
	   ("South Dojo", NOW(), NOW());
       
SELECT * FROM dojos;
       
INSERT INTO ninjas (first_name, last_name, age, dojo_id, created_at, updated_at)
VALUES ("Red", "Ninja", 25, 4, NOW(), NOW()),
	   ("Blue", "Ninja", 30, 4, NOW(), NOW()),
	   ("John", "Doe", 50, 4, NOW(), NOW());
       
INSERT INTO ninjas (first_name, last_name, age, dojo_id, created_at, updated_at)
VALUES ("Green", "Ninja", 25, 5, NOW(), NOW()),
	   ("White", "Ninja", 30, 5, NOW(), NOW()),
	   ("Purple", "Samurai", 50, 5, NOW(), NOW());
       
INSERT INTO ninjas (first_name, last_name, age, dojo_id, created_at, updated_at)
VALUES ("Teal", "Ninja", 20, 6, NOW(), NOW()),
	   ("Gray", "Ninja", 27, 6, NOW(), NOW()),
	   ("Jane", "Smith", 45, 6, NOW(), NOW());
    
SELECT * FROM ninjas WHERE dojo_id = 4;

SELECT * FROM ninjas WHERE dojo_id = 6;

SELECT * FROM dojos WHERE id = (SELECT dojo_id FROM ninjas WHERE first_name = "Jane");
-- Shouldn't know last ninja, use order by, desc order to get last ninja by id, limit 1, join with dojos table
-- SELECT * FROM ninjas ORDER BY dojo_id LIMIT 1;
