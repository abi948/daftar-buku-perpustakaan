CREATE DATABASE IF NOT EXISTS db_sinemalist;
USE db_sinemalist;

CREATE TABLE IF NOT EXISTS films (
  id INT NOT NULL AUTO_INCREMENT,
  judul VARCHAR(255) NOT NULL,
  genre VARCHAR(100) NOT NULL,
  tahun INT NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO films (judul, genre, tahun) VALUES
('Interstellar', 'Sci-Fi', 2014),
('Inception', 'Action', 2010),
('The Conjuring', 'Horror', 2013);
