-- CREATE students (id, name, program)
-- Each field/columns has a given type
-- INTEGER
-- TEXT/VARCHAR
-- SERIAL PRIMARY KEY
DROP TABLE students;
CREATE TABLE students (
-- fields are
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    program_name VARCHAR(255)
);