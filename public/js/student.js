const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Be sure to update with your own MySQL password!
  password: 'MerRy042021!',
  database: 'attendance_db',
});

const getStudent = () => {
  addEventListener('click', (e) => { 
  console.log('Selecting Students \n');
  connection.query('SELECT * FROM students', (err, res) => {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
})};

const deleteStudent = () => { 
  addEventListener('click', (e) => {
  console.log('Deleting Student..\n');
  connection.query('DELETE FROM students WHERE ?',
    {
    },
    (err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} products deleted!\n`);
      // Call readProducts AFTER the DELETE completes
      getStudent();
    }
  );
})};

const updateStudent = () => {
  console.log('Updating Students...\n');
  const query = connection.query(
    'UPDATE students SET ? WHERE ?',
    [
      {
        teacher: 'Michael Williams',
      },
      {
        name: 'Allen, Delaphonta',
      },
    ],
    (err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} Student updated!\n`);
      // Call deleteProduct AFTER the UPDATE completes
      deleteStudent();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
};

const createStudent = () => {
  console.log('Insert New student...\n');
  const query = connection.query(
    'INSERT INTO students SET ?',
    {
      student_name: 'Ryan Lackey',
      teacher_main: 'Gary Parnell',
      teacher_email: 'jlw00329@gmail.com',
    },
    (err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} Student inserted!\n`);
      // Call updateProduct AFTER the INSERT completes
      updateSudent();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
};

// Connect to the DB
connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}\n`);
  createStudent();
});

