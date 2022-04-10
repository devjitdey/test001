module.exports = (sequelize, Sequelize) => {
	const user = sequelize.define('user', {
	id: {
      type: Sequelize.BIGINT,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    username: {
	    type: Sequelize.STRING,
        allowNull: false
	},
    email: {
	    type: Sequelize.STRING,
        allowNull: false
	},
    password:{
	    type: Sequelize.STRING,
        allowNull: false
	},
    createdAt: {
      type: 'TIMESTAMP',
      allowNull: false
    },
    updatedAt: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    },

  });
  user.associate = function (db) {
    user.belongsTo(db.menu, { foreignKey: "id" });
  };
return user;
}