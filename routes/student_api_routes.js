// Requiring our Todo model
const db = require('../models');

module.exports = (app) => {
  //Viewing all Students information(the student table)
  app.get('/api/student/', (req, res) => {
    db.Stu.findAll({}).then((stuPost) => {
      const hbsStudent = {
        Stu: stuPost,
      };
      res.render('student', hbsStudent);
    });
  });

  // Get route for retrieving a single student
  app.get('/api/student/search:id', (req, res) => {
    db.Stu.findOne({
      where: {
        id: req.body.id,
      },
    }).then((stuPost) => {
      const hbsStudent = {
        Stu: stuPost,
      };
      res.render('student', hbsStudent);
    });
  });

  // POST route for saving a new student
  app.post('/api/student/:new', (req, res) => {
    console.log(req.body);
    db.Stu.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    }).then((stuPost) => res.json(stuPost));
  });

  // DELETE route for deleting posts
  app.delete('/api/student/delete/:id', (req, res) => {
    db.Stu.destroy({
      where: {
        id: req.body.id,
      },
    }).then((stuPost) => res.json(stuPost));
  });

  // PUT route for updating posts
  app.put('/api/student/update/:id', (req, res) => {
    db.Stu.update({
      where: {
        id: req.body.id,
      },
    }).then((stuPost) => res.json(stuPost));
  });
};
