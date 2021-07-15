INSERT INTO users (first_name, last_name, created_at, updated_at)
VALUES ("Amy", "Giver", NOW(), NOW()),
	   ("Eli", "Buyers", NOW(), NOW()),
       ("Marky", "Mark", NOW(), NOW()),
       ("Big", "Bird", NOW(), NOW()),
       ("Kermit", "The Frog", NOW(), NOW()),
       ("Jane", "Doe", NOW(), NOW());
       
INSERT INTO friendships (user_id, friend_id, created_at, updated_at)
VALUES (1, 2, NOW(), NOW()),
	   (1, 4, NOW(), NOW()),
       (1, 6, NOW(), NOW());
       
INSERT INTO friendships (user_id, friend_id, created_at, updated_at)
VALUES (2, 1, NOW(), NOW()),
	   (2, 3, NOW(), NOW()),
       (2, 5, NOW(), NOW());
       
INSERT INTO friendships (user_id, friend_id, created_at, updated_at)
VALUES (3, 2, NOW(), NOW()),
	   (3, 5, NOW(), NOW());
       
INSERT INTO friendships (user_id, friend_id, created_at, updated_at)
VALUES (4, 3, NOW(), NOW());

INSERT INTO friendships (user_id, friend_id, created_at, updated_at)
VALUES (5, 1, NOW(), NOW()),
	   (5, 6, NOW(), NOW());
       
INSERT INTO friendships (user_id, friend_id, created_at, updated_at)
VALUES (6, 2, NOW(), NOW()),
	   (6, 3, NOW(), NOW());
       
SELECT * FROM users 
JOIN friendships ON users.id = friendships.user_id
LEFT JOIN users as user2 ON users.id = friendships.friend_id;

SELECT user2.first_name as friend_first_name, user2.last_name as friend_last_name FROM users;


ROLLBACK;


       