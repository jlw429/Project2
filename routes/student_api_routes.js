// Requiring our Todo model
const db = require('../models');


module.exports = (app) => {
  
  //Viewing Current Students information(the student table)
  app.get('/api/student/', (req, res) => {
    db.Stu.findAll({}).then((stuPost) => res.json(stuPost));
  });

  // Get route for returning students in a certain classroom
  app.get('/api/student/:classroom', (req, res) => {
    db.Stu.findAll({
      where: {
        classroom: req.params.classroom,
      },
    }).then((stuPost) => {
      res.json(stuPost);
    });
  });

  // Get route for retrieving a single student
  app.get('/api/student/:id', (req, res) => {
    db.Stu.findOne({
      where: {
        id: req.params.id,
      },
    }).then((stuPost) => res.json(stuPost));
  });
  //Get route for retreiving a single students attendance

    // POST route for saving a new student
  app.post('/student/:new', (req, res) => {
    console.log(req.body);
    db.Stu.create({
      name: req.name.name,
      classroom: req.classroom.classroom,
    }).then((stuPost) => res.json(stuPost));
  });

  // DELETE route for deleting posts
  app.delete('/api/student/:id', (req, res) => {
    db.Stu.destroy({
      where: {
        id: req.params.id,
      },
    }).then((StuPost) => res.json(stuPost));
  });

  // PUT route for updating posts
  app.put('/api/student', (req, res) => {
    db.Stu.update(req.body, {
      where: {
        id: req.body.id,
      },
    }).then((stuPost) => res.json(stuPost));
  });
};
