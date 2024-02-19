const settingsValidations = require("./validations/settings.validation");

const validationsRegistry = {
  ...settingsValidations
};

exports.validationsRegistry = validationsRegistry;