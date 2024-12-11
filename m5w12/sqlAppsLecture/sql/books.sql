DROP TABLE IF EXISTS books;

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  author VARCHAR(255)
);

INSERT INTO books 
  (title, author)
VALUES
  ('Harry Potter and the Sorcerers Stone', 'J.K. Rowling'),
  ('Lord of the Rings', 'J. R. R. Tolkien'),
  ('A Song of Fire and Ice', 'George R. R. Martin'),
  ('Do Androids Dream of Electric Sheep', 'Philip K. Dick');
