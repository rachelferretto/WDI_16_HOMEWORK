CREATE DATABASE planets_db;

CREATE TABLE planets (
    id SERIAL4 PRIMARY KEY,
    name VARCHAR(100),
    img_url VARCHAR(400)
);

INSERT INTO planets (name, img_url) values ('Mercury', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/450px-Mercury_in_color_-_Prockter07-edit1.jpg');

INSERT INTO planets (name, img_url) values ('Venus', 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg');

INSERT INTO planets (name, img_url) values ('Earth', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/450px-The_Earth_seen_from_Apollo_17.jpg');


CREATE TABLE details (
    id SERIAL4 PRIMARY KEY,
    planet_id INTEGER NOT NULL,
    radius VARCHAR(20),
    orbital_speed VARCHAR(100),
    dist_from_sun VARCHAR(100),
    FOREIGN KEY (planet_id) REFERENCES planets (id) ON DELETE RESTRICT
);


INSERT INTO details (planet_id, radius, orbital_speed, dist_from_sun) values ('1','2439.7km','47.362 km per s','57.91 million km');



CREATE TABLE users (
    id SERIAL4 PRIMARY KEY,
    email VARCHAR(300),
    password_digest VARCHAR(400)
);


CREATE TABLE comments (
    id SERIAL4 PRIMARY KEY,
    content TEXT NOT NULL,
    comment_time VARCHAR(100),
    planet_id INTEGER NOT NULL,
    FOREIGN KEY (planet_id) REFERENCES planets (id) ON DELETE RESTRICT 
);

