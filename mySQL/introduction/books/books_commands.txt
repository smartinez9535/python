INSERT INTO authors (name, created_at, updated_at)
VALUES ("Jane Austen", NOW(), NOW()),
	   ("Emily Dickinson", NOW(), NOW()),
       ("Fyodor Dostoevsky", NOW(), NOW()),
	   ("William Shakespeare", NOW(), NOW()),
	   ("Lau Tzu", NOW(), NOW());
       
INSERT INTO books (title, num_of_pages, created_at, updated_at)
VALUES ("C Sharp", 30, NOW(), NOW()),
	   ("Java", 20, NOW(), NOW()),
       ("Python", 40, NOW(), NOW()),
	   ("PHP", 70, NOW(), NOW()),
	   ("Ruby", 10, NOW(), NOW());
       
UPDATE books SET title = "C#" WHERE title = "C Sharp";

UPDATE authors SET name = "Bill Shakespeare" WHERE id = 4;

INSERT INTO favorites (author_id, book_id)
VALUES (1, 1),
	   (1, 2);
       
INSERT INTO favorites (author_id, book_id)
VALUES (2, 1),
       (2, 2),
       (2, 3);
       
INSERT INTO favorites (author_id, book_id)
VALUES (3, 1),
       (3, 2),
       (3, 3),
       (3, 4);
       
INSERT INTO favorites (author_id, book_id)
VALUES (4, 1),
       (4, 2),
       (4, 3),
       (4, 4),
       (4, 5);
       
SELECT * FROM authors WHERE id IN(SELECT author_id FROM favorites WHERE book_id = 3);

DELETE FROM authors WHERE id = 2;

INSERT INTO favorites (author_id, book_id)
VALUES (5, 2);

SELECT * FROM books WHERE id IN(SELECT book_id FROM favorites WHERE author_id = 3);

SELECT * FROM authors WHERE id IN(SELECT author_id FROM favorites WHERE book_id = 5);

