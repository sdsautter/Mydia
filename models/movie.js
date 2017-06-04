module.exports = function(sequelize, DataTypes) {
  var Movie = sequelize.define("Movie", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    director: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    }
  },
    {
      // We're saying that we want our User to have Posts
      classMethods: {
        associate: function(models) {
          // An User (foreignKey) is required or a Movie can't be made
          Movie.belongsTo(models.User, {
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
    }
  );
  return Movie;
};
