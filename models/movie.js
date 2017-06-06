module.exports = function(sequelize, DataTypes) {
  var Movie = sequelize.define("Movie", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    uniqueID: {
      type: DataTypes.INTEGER,
    },
    director: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    genre: {
      type: DataTypes.STRING,
      allowNull:false,
      len:[1]
    },
    views: {
      type: DataTypes.INTEGER
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
