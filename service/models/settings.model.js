module.exports = (sequelize, DataTypes) => {
  const SettingMeta = sequelize.define("SettingMeta", {
    _status  : { type: DataTypes.STRING },
    deletedAt: {
      allowNull: true,
      type     : "TIMESTAMP",
    },
    id: {
      autoIncrement: true,
      primaryKey   : true,
      type         : DataTypes.INTEGER,
    },
    isActive: {
      defaultValue: true,
      type        : DataTypes.BOOLEAN,
    },
    label: {
      defaultValue: "",
      type        : DataTypes.STRING,
    },
    name: {
      type  : DataTypes.STRING,
      unique: true,
    },
    status: {
      defaultValue: "Active",
      type        : DataTypes.STRING,
    },
    value: {
      defaultValue: {},
      type        : DataTypes.JSON,
    },
  });
  
  SettingMeta.associate = (models) => {
    SettingMeta.belongsTo(models.Users, {
      as        : "Owner",
      foreignKey: "createdBy",
      sourceKey : "id",
    });
    SettingMeta.belongsTo(models.Users, {
      as        : "Updater",
      foreignKey: "updatedBy",
      sourceKey : "id",
    });
    SettingMeta.belongsTo(models.Users, {
      as        : "Destroyer",
      foreignKey: "deletedBy",
      sourceKey : "id",
    });
  };
  
  return SettingMeta;
};
  