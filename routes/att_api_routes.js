// Requiring our Todo model
const db = require('../models');

module.exports = (app) => {
  //Viewing Current Attendance (the attendance table)
  app.get('/api/attendance/', (req, res) => {
    db.Att.findAll({}).then((attPost) => {
      const temp = {
        att: attPost
      }
      res.render("index", temp);
      //res.json(attPost)
    });
  });
  
  app.get('/api/attendance/:id', (req, res) => {
    db.Att.findOne({
      where: {
        id: req.params.id,
      },
    }).then((attPost) => res.json(attPost));
  });

};
