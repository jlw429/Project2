module.exports = (sequelize, DataTypes) => {
  const Stu = sequelize.define('Stu', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  });
  return Stu;
};
