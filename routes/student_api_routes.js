// Requiring our Todo model
const db = require('../models');

module.exports = (app) => {
  //Viewing all Students information(the student table)
  app.get('/api/student/', (req, res) => {
    db.Student.findAll({}).then((stuPost) => {
      const hbsStudent = {
        stu: stuPost,
      };
      res.send(hbsStudent);
    });
  });

  // Get route for retrieving a single student
  app.get('/api/student/:id', (req, res) => {
    db.Student.findOne({
      where: {
        id: req.params.id,
      },
    }).then((stuPost) => {
      const hbsStudent = {
        stu: stuPost,
      };
      res.send(hbsStudent);
    });
  });

  // POST route for saving a new student
  app.post('/api/student/new', (req, res) => {
    console.log(req.body);
    db.Student.create({
      student_name: req.body.student_name,
      teacher_main: req.body.teacher_main,
      teacher_email: req.body.teacher_email,
    }).then((stuPost) => res.json(stuPost));
  });

  // DELETE route for deleting posts
  app.post('/api/student/delete/:id', (req, res) => {
    db.Student.destroy({
      where: {
        id: req.params.id,
      },
    }).then((stuPost) => res.json(stuPost));
    return res.redirect('/student');
  });

  // PUT route for updating posts
  app.put('/api/student/update/:id', (req, res) => {
    db.Student.update(req.body, {
      where: {
        id: req.body.id,
      },
    }).then((stuPost) => res.json(stuPost));
  });
};
