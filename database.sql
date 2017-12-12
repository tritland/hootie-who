CREATE TABLE people (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(80) NOT NULL,
    image_URL VARCHAR NOT NULL
)

INSERT INTO people (full_name, image_URL)
VALUES ('Al Pacino','https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Al_Pacino_-_Hummel.jpg/207px-Al_Pacino_-_Hummel.jpg' );