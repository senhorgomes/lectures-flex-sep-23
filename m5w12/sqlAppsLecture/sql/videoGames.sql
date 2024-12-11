DROP TABLE IF EXISTS videoGames;

CREATE TABLE videoGames (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  publisher VARCHAR(255)
);

INSERT INTO videoGames 
  (title, publisher)
VALUES
  ('Tetris', 'Nintendo'),
  ('Donkey Kong', 'Rare'),
  ('Final Fantasy', 'Square Enix'),
  ('Halo', 'Bungie');
