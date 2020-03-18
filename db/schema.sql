-- ### "Schema"

-- DROP DATABASE IF EXISTS burgers_db2;

CREATE DATABASE burgers_db2;
USE burgers_db2;
CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);