CREATE DATABASE planets_db;

CREATE TABLE planets (
    id SERIAL4 PRIMARY KEY,
    name VARCHAR(100),
    img_url VARCHAR(400)
);

INSERT INTO planets (name, img_url) values ('Mercury', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/450px-Mercury_in_color_-_Prockter07-edit1.jpg');

INSERT INTO planets (name, img_url) values ('Venus', 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg');

INSERT INTO planets (name, img_url) values ('Earth', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/450px-The_Earth_seen_from_Apollo_17.jpg');


