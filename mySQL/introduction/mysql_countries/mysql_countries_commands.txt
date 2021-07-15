SELECT countries.name, languages.language, languages.percentage
FROM countries
INNER JOIN languages ON countries.id = languages.country_id AND languages.language = "Slovene" ORDER BY languages.percentage DESC;

SELECT countries.name, COUNT(cities.country_id)
FROM countries
JOIN cities ON cities.country_id = countries.id GROUP BY countries.id ORDER BY COUNT(cities.country_id) DESC;

SELECT cities.name, cities.population
FROM cities
JOIN countries ON cities.country_id = countries.id AND countries.name = "Mexico" AND cities.population > 500000 ORDER BY cities.population DESC;

SELECT countries.name, languages.language, languages.percentage
FROM languages
JOIN countries ON languages.country_id = countries.id AND languages.percentage > 89 ORDER BY languages.percentage DESC;

SELECT name, surface_area, population
FROM countries
WHERE surface_area < 501 AND population > 100000;

SELECT name, government_form, capital, life_expectancy
FROM countries
WHERE government_form = "Constitutional Monarchy" AND capital > 200 AND life_expectancy > 75;

SELECT countries.name, cities.name, cities.district, cities.population
FROM countries
JOIN cities ON cities.country_id = countries.id AND countries.name = "Argentina" AND cities.district = "Buenos Aires" AND cities.population > 500000;

SELECT region, COUNT(id)
FROM countries
GROUP BY region ORDER BY COUNT(id) DESC;