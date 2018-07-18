CREATE DATABASE moviedb;

CREATE TABLE movie_details (
    imdb_id VARCHAR(20),
    title VARCHAR(200),
    image_url VARCHAR(400),
    actors VARCHAR(400),
    year_released VARCHAR(10)
);


INSERT INTO movie_details (imdb_id, title, image_url, actors, year_released) VALUES (23,'jaws','blah','shark', 1995);