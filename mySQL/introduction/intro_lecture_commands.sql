-- query a set of instructions written in SQL
-- 4 basic commands
-- SQL convention is that all SQL commands are in all caps
-- all queries MUST end in a semi colon

-- CRUD: Create, Read, Update, Delete

-- Create
-- SQL command: INSERT
-- this command adds data to the database
-- INSERT INTO <name of table> (<fieldname1>, <fieldname2>) VALUES (<fieldvalue1>, <fieldvalue2>);
-- id field is auto generated for us, assuming we checked off auto increment
-- MUST provide data for created_at and updated_at. NOW() function works fine. 

INSERT INTO users (first_name, last_name, email, created_at, updated_at)
VALUES ("Shawn", "Converse", "sc@dojo.com", NOW(), NOW());

-- INSERT with 1 to 1 and 1 to many

-- INSERT into many to many join table

-- READ
-- SQL command: SELECT
-- SELECT <what fields to grab> FROM <table name>

SELECT * FROM users; -- star or wild character. means to grab all fields
SELECT first_name, last_name FROM users;
SELECT street city FROM addresses;

-- WHERE command to get data based on a condition
SELECT * FROM users WHERE first_name LIKE "S%"; -- we are looking for only first names that start with capital S
SELECT * FROM users WHERE id = 3;
SELECT * FROM users WHERE id > 2;
SELECT * FROM users WHERE first_name LIKE "S%" OR id > 3;

-- ORDER BY
-- default order is ascending, we can use DESC to start with the greater value
SELECT * FROM users ORDER BY first_name;
SELECT * FROM users ORDER BY first_name DESC;

-- we can combine multiple commands together
SELECT * FROM users
WHERE id > 2
ORDER BY last_name;

-- UPDATE 
-- SQL command: UPDATE 
-- UPDATE <table name> SET <fieldname> = <fieldvalue>, <fieldname> = <fieldvalue> WHERE <field> = <value>;

SELECT * FROM users;
UPDATE users SET email = "jr@dojo.com", updated_at = NOW() WHERE id = 2;

SELECT * FROM orders;
UPDATE orders SET amount = 999.99, updated_at = NOW() WHERE id = 1;

-- DELETE
-- SQL command: DELETE
-- DELETE FROM <tablename> WHERE id = <value>;
SELECT * FROM orders_items;
DELETE FROM orders WHERE id = 9;

-- FUNCTIONS
-- NOW()
-- don't need to memorize functions, we can always look them up
-- AS command allows us to rename fields to something else

SELECT CONCAT(first_name, " ", last_name) AS full_name FROM users;
SELECT LOWER(first_name) FROM users;
SELECT id, CASE WHEN id %2 != 0 then "odd" else "even" end AS results FROM users WHERE results = "odd";

-- JOIN
-- SQL command: SELECT
-- SELECT <fields> FROM <table> JOIN <2ndtable> ON <1sttablePK> = <2ndtableFK>;

-- 1 to 1, 1 to Many

SELECT * FROM users JOIN addresses ON users.id = addresses.user_id WHERE users.id = 2;
SELECT * FROM users JOIN orders ON users.id = orders.user_id;

-- Many to Many
-- SELECT <fields> FROM <table> 
-- JOIN <2ndtable> ON <1sttablePK> = <2ndtableFK>
-- JOIN <3rdtable> ON <3rdtablePK> = <2ndtableFK>;

SELECT orders.amount, items.name, items.descriptions FROM orders
JOIN orders_items ON orders.id = orders_items.order_id
JOIN items ON items.id = orders_items.item_id
WHERE orders.id = 1;

SELECT users.first_name, users.last_name, orders.amount, items.name, items.description FROM users
JOIN orders ON users.id = orders..user_id
JOIN orders_items ON orders.id - orders_items.order_id
JOIN items ON items.id = orders_items.item_id
WHERE users.id = 1

-- LEFT JOIN

SELECT * FROM users --> LEFT TABLE
LEFT JOIN orders ON users.id = orders.user_id --> RIGHT TABLE
WHERE users.id = 4;

SELECT * FROM users
LEFT JOIN addresses ON users.id = addresses.user_id;