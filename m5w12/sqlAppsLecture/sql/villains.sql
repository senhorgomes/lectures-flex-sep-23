-- Schema file - create the table and structure
DROP TABLE IF EXISTS movie_villains;
CREATE TABLE movie_villains (
  id SERIAL PRIMARY KEY,
  villain VARCHAR(50),
  movie VARCHAR(255)
);
--

-- Seed file - populate the table
INSERT INTO movie_villains 
  (villain, movie)
VALUES 
  ('Agent Smith', 'The Matrix'),
  ('Voldemort', 'Harry Potter Series'),
  ('Darth Vader', 'Star Wars Series'),
  ('Hans Gruber', 'Die Hard');
--