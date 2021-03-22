module.exports = (sequelize, DataTypes) => {
  const Att = sequelize.define('Att', {
    student_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    teacher_main: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    teacher_email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
  });
  return Att;
};
