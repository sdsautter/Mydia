module.exports = function(sequelize, DataTypes) {
  var Book = sequelize.define("Book", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    google_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    authors: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    publisher: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    published_date: {
      type: DataTypes.STRING,
      allowNull:false,
      len:[1]
    },
    cover: {
      type: DataTypes.STRING,
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
        // associate: function(models) {
        //   // An User (foreignKey) is required or a Book can't be made
        //   Book.belongsTo(models.User, {
        //     foreignKey: {
        //       allowNull: false
        //     }
        //   });
        // }
      }
    }
  );
  return Book;
};
