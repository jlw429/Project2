module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Stu', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    classroom: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
  });
  return Stu;
};
