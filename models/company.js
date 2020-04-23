'use strict';
module.exports = (sequelize, DataTypes) => {
  console.log(sequelize)
  const Company = sequelize.define('Company', {
    name: DataTypes.STRING,
    allowNull: false,
  }, {});
  Company.associate = function(models) {
    Company.hasMany(models.Employee,{
      foreignKey:'companyId',
      as:'employees'
    })
    // associations can be defined here
  };
  return Company;
};