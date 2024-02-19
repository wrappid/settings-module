const SettingMeta = require("./models/SettingMeta.model");

const modelsRegistry = {
  "SettingMeta":{
    database: "application",
    model: SettingMeta
  }
};

exports.modelsRegistry = modelsRegistry;