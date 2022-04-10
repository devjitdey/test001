module.exports = (sequelize, Sequelize) => {
	const menu = sequelize.define('menu', {
	menuId: {
      type: Sequelize.BIGINT,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    menuDate: {
	    type: Sequelize.STRING,
        allowNull: false
	},
    lunchOrder: {
	    type: Sequelize.BOOLEAN,
        default: false
	},
    dinnerOrder:{
        type: Sequelize.BOOLEAN,
        default: false
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
  menu.associate = function (db) {
    menu.hasMany(db.user, { foreignKey: "id" });
  };
return menu;
}