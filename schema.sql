DROP DATABASE IF EXISTS mknvh63jt0bx4odc;

CREATE DATABASE mknvh63jt0bx4odc;

USE mknvh63jt0bx4odc;

CREATE TABLE student ( 
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
student_name VARCHAR(50),
teacher_main VARCHAR(50),
teacher_email VARCHAR(50)
);

CREATE TABLE attendance (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
classNum INT,
className VARCHAR(50),
teacher VARCHAR(50),
teacher_email VARCHAR(50),
percentage VARCHAR(50)

);

CREATE TABLE user (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
email VARCHAR(25),
password VARCHAR(255)
);

INSERT INTO attendance (classNum, className, teacher, teacher_email, percentage) VALUES (310, "Biology", "Hawthorne, Ingrid", "jlw00329@gmail.com", "76% (24 of 30 Students)");
INSERT INTO attendance (classNum, className, teacher, teacher_email, percentage) VALUES (456, "ELA", "Parnell, Gary", "jlw00329@gmail.com", "87% (26 of 30 Students)");
INSERT INTO attendance (classNum, className, teacher, teacher_email, percentage) VALUES (799, "JROTC", "Williams, Michael", "jlw00329@gmail.com", "93% (28 of 30 Students)");
INSERT INTO attendance (classNum, className, teacher, teacher_email, percentage) VALUES (121, "History", "Kennebrew, Silas", "jlw00329@gmail.com", "93% (28 of 30 Students)");
INSERT INTO attendance (classNum, className, teacher, teacher_email, percentage) VALUES (560, "Family Living and Management", "Manningham, Ivan", "jlw00329@gmail.com", "93% (28 of 30 Students)");
INSERT INTO attendance (classNum, className, teacher, teacher_email, percentage) VALUES (200, "Algebra", "Tucci, David", "jlw00329@gmail.com", "83% (25 of 30 Students)");
INSERT INTO attendance (classNum, className, teacher, teacher_email, percentage) VALUES (101, "Computer Technology", "Williams-Hurst, Natosha", "jlw00329@gmail.com", "70% (21 of 30 Students)");

INSERT INTO student (student_name, teacher_main, teacher_email) VALUES ("Allen, Delaphonta", "Gary Parnell", "jlw00329@gmail.com");
INSERT INTO student (student_name, teacher_main, teacher_email) VALUES ("Bender, Cortez", "David Tucci", "jlw00329@gmail.com");
INSERT INTO student (student_name, teacher_main, teacher_email) VALUES ("Chenault, Jeremy", "Silas Kennebrew", "jlw00329@gmail.com");
INSERT INTO student (student_name, teacher_main, teacher_email) VALUES ("David, Tyrone", "Ivan Manningham", "jlw00329@gmail.com");
INSERT INTO student (student_name, teacher_main, teacher_email) VALUES ("Epperson, Jayla", "Nathosha Williams-Hurst", "jlw00329@gmail.com");
INSERT INTO student (student_name, teacher_main, teacher_email) VALUES ("Forrest, Devon", "Gary Parnell", "jlw00329@gmail.com");
INSERT INTO student (student_name, teacher_main, teacher_email) VALUES ("Gaskin, Jvarie", "Ivan Manningham", "jlw00329@gmail.com");
INSERT INTO student (student_name, teacher_main, teacher_email) VALUES ("Herron, Alicia", "Gary Parnell", "jlw00329@gmail.com");
INSERT INTO student (student_name, teacher_main, teacher_email) VALUES ("Iverson, Kye'Shawn", "Michael Williams", "jlw00329@gmail.com");
INSERT INTO student (student_name, teacher_main, teacher_email) VALUES ("Jones, Aris", "Natosha Williams-Hurst", "jlw00329@gmail.com");
INSERT INTO student (student_name, teacher_main, teacher_email) VALUES ("Kern, Jaheim", "David Tucci", "jlw00329@gmail.com");
INSERT INTO student (student_name, teacher_main, teacher_email) VALUES ("Lovelady, Anthony", "Ivan Manningham", "jlw00329@gmail.com");
INSERT INTO student (student_name, teacher_main, teacher_email) VALUES ("McDuffy, Ramonte", "Silas Kennebrew", "jlw00329@gmail.com");
INSERT INTO student (student_name, teacher_main, teacher_email) VALUES ("Nevett, Tie'Asia", "Michael Williams", "jlw00329@gmail.com");
INSERT INTO student (student_name, teacher_main, teacher_email) VALUES ("Osborne, Ja'Nila", "Gary Parnell", "jlw00329@gmail.com");
INSERT INTO student (student_name, teacher_main, teacher_email) VALUES ("Pickett, Samauri", "Ingrid Hawthorne", "jlw00329@gmail.com");
INSERT INTO student (student_name, teacher_main, teacher_email) VALUES ("Resse, Dawayne", "Natosha Winters-Hurst", "jlw00329@gmail.com");
INSERT INTO student (student_name, teacher_main, teacher_email) VALUES ("Spence, Naveah", "David Tucci", "jlw00329@gmail.com");
INSERT INTO student (student_name, teacher_main, teacher_email) VALUES ("Thacker, Lashawn", "Ivan Manningham", "jlw00329@gmail.com");
INSERT INTO student (student_name, teacher_main, teacher_email) VALUES ("Usury, Branae", "Silas Kennebrew", "jlw00329@gmail.com");
INSERT INTO student (student_name, teacher_main, teacher_email) VALUES ("Vermando, Sheresse", "Michael Williams", "jlw00329@gmail.com");
INSERT INTO student (student_name, teacher_main, teacher_email) VALUES ("Walls-Watson, Marvie", "Gary Parnell", "jlw00329@gmail.com");
INSERT INTO student (student_name, teacher_main, teacher_email) VALUES ("Ali, Tydarius", "Ingrid Hawthorne", "jlw00329@gmail.com");
INSERT INTO student (student_name, teacher_main, teacher_email) VALUES ("Banks, Corday", "Natosha Winters-Hurst", "jlw00329@gmail.com");
INSERT INTO student (student_name, teacher_main, teacher_email) VALUES ("Childrey, De'Asia", "David Tucci", "jlw00329@gmail.com");
INSERT INTO student (student_name, teacher_main, teacher_email) VALUES ("Cook, Nautika", "Ivan Manningham", "jlw00329@gmail.com");
INSERT INTO student (student_name, teacher_main, teacher_email) VALUES ("Dean, Ken'Ron", "Silas Kennebrew", "jlw00329@gmail.com");
INSERT INTO student (student_name, teacher_main, teacher_email) VALUES ("Evans, Waltriez", "Michael Williams", "jlw00329@gmail.com");
INSERT INTO student (student_name, teacher_main, teacher_email) VALUES ("Flynn, Juantez", "Gary Parnell", "jlw00329@gmail.com");
INSERT INTO student (student_name, teacher_main, teacher_email) VALUES ("Glist, Xaen", "Ingrid Hawthorne", "jlw00329@gmail.com"); 