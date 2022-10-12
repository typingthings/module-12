DROP DATABASE IF EXISTS inventory_db;
CREATE DATABASE inventory_db;

USE inventory_db;

CREATE TABLE department(
  id INTEGER auto_increment NOT NULL primary key,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE role(
  id INTEGER auto_increment NOT NULL primary key,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INTEGER
);

CREATE TABLE employee(
  id INTEGER auto_increment PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR (30),
  role_id INTEGER,
  manager_id INTEGER
);
