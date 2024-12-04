-- Select all albums
SELECT * FROM albums;
-- Select all songs
SELECT * FROM songs;


-- Filtering
-- WHERE
SELECT * FROM albums WHERE artist_name = 'Kendrick Lamar';
-- List all songs with a rating over 4
SELECT * FROM songs WHERE rating > 4;

--  Filter By Text
-- List all songs that are named All Star
SELECT * FROM songs WHERE title = 'All Star';
-- List all songs that have 'my' in it
SELECT * FROM songs WHERE title LIKE '%My%';
-- Database of properties -> %ancouver%

-- Pagination
-- List all songs with a rating over 4 but limit the results to the first 3 rows
SELECT * FROM songs WHERE rating >= 4 LIMIT 3;
-- List all songs with a rating over 4 but skip the first 3 results and grab the next 3
SELECT * FROM songs WHERE rating >= 4 OFFSET 3 LIMIT 3;
-- Ordering
-- List all albums and order by release date
SELECT * FROM albums ORDER BY release_date DESC;

-- Joining Tables - When joining tables there needs to be something that connects the two tables
-- List all albums and songs
SELECT * FROM albums JOIN songs ON albums.id = album_id;
SELECT songs.title, albums.artist_name, albums.name as album_name  FROM albums JOIN songs ON albums.id = album_id;
-- Inner Join will join all and return only the matching items
-- Left Join will join all of the MATCHING items and all of the items from the "left" table
SELECT songs.title, albums.artist_name, albums.name as album_name  FROM albums LEFT JOIN songs ON albums.id = album_id;


-- Right Join will join all of the Matching items and all of the "right" table
SELECT songs.title, albums.artist_name, albums.name as album_name  FROM albums RIGHT JOIN songs ON albums.id = album_id;



-- Aggregate functions
-- Average avg 
SELECT AVG(rating) as avg_rating FROM songs;
-- Count count
SELECT COUNT(*) FROM songs;

-- Grab ratings from GNX by album name where the average song is greater than 3

