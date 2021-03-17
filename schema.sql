DROP DATABASE IF EXISTS mknvh63jt0bx4odc;

CREATE DATABASE mknvh63jt0bx4odc;

USE mknvh63jt0bx4odc;

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