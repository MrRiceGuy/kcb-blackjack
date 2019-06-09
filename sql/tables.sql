--ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

CREATE DATABASE kcb_cards;

USE kcb_cards;

CREATE TABLE users(
		id varchar(50) primary key not null,
        first_name varchar(20) not null,
        last_name varchar(30) not null,
        birthdate date not null,
        username varchar(50) not null,
        password varchar(255) not null,
        email varchar(50) not null
)

CREATE TABLE user_code(
	id int primary key auto_increment not null,
    date datetime not null,
    account_id varchar(50) not null,
    code varchar(6) not null,
    FOREIGN KEY (account_id) REFERENCES users(id)
)