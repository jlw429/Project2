// Requiring our Todo model
const db = require('../models');

module.exports = (app) => {
  //Viewing Current Attendance (the attendance table)
  app.get('/api/attendance/', (req, res) => {
    db.Attendance.findAll({}).then((attPost) => {
      const temp = {
        att: attPost,
      };
      res.render('attendance', temp);
      //res.json(attPost)
    });
  });

  app.get('/api/attendance/:id', (req, res) => {
    db.Attendance.findOne({
      where: {
        id: req.params.id,
      },
    }).then((attPost) => {
      const getOne = {
        att: attPost,
      };
      res.render('attendance', getOne);
    });
  });
};
