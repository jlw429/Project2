drop database if exists attendance_db;  

CREATE DATABASE attendance_db; 

USE attendance_db; 

CREATE TABLE Students ( 
idStudents INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
firstName VARCHAR(50), 
lastName VARCHAR(50)
);

CREATE TABLE Attendance (
idAttendance INT NOT NULL, 
date DATE, 
status VARCHAR(50), 
tagCode VARCHAR(50)
);

CREATE TABLE Classes(
className VARCHAR(50) 
);
CREATE TABLE teachers( 
firstName VARCHAR(50), 
lastName VARCHAR(50) 
)
;
