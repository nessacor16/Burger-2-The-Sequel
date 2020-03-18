'use strict';
module.exports = function(sequelize, DataTypes) {
  var Customers = sequelize.define("Customers", {
    customer_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Customers.associate = function (models) {
    models.Customers.hasOne(models.Burgers);
  };

  return Customers;
}