const yup = require("yup");

const getUserSettings = {
    body: yup.object({}).noUnknown().strict(),
    query: yup.object({}).noUnknown().strict(),
  };

const getSettingMeta = {
body: yup.object({}).noUnknown().strict(),
query: yup.object({}).noUnknown().strict(),
};

  module.exports = {getUserSettings,getSettingMeta};