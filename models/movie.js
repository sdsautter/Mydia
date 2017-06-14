module.exports = function(sequelize, DataTypes) {
  var Movie = sequelize.define("Movie", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    imdbId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    director: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    actors: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    plot: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    genre: {
      type: DataTypes.STRING,
      allowNull:false,
      len:[1]
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull:false,
      len:[1]
    }, 
    user_rating: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    user_comment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    user_format: {
      type: DataTypes.STRING,
      allowNull: true
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
