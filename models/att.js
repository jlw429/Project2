module.exports = (sequelize, DataTypes) => {
  const Att = sequelize.define('Att', {
    period: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
  });
  return Att;
};
