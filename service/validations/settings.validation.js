const yup = require("yup");

const emailOrPhone = yup
  .string()
  .matches(/^([0-9]{10}|[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+)$/);

const getUserSettings = {
  body: yup.object({}).noUnknown().strict(),
  query: yup.object({}).noUnknown().strict(),
};

const getSettingMeta = {
  body: yup.object({}).noUnknown().strict(),
  query: yup.object({}).noUnknown().strict(),
};

const postAddContact = {
  body: yup
    .object({
      data: emailOrPhone.required(),
    })
    .noUnknown()
    .strict(),
  type: yup
    .object({
      id: yup.mixed().required(),
    })
    .noUnknown()
    .strict(),
  query: yup.object({}).noUnknown().strict(),
};

const putChangePrimaryContact = {
  body: yup
    .object({
      data: emailOrPhone.required("Please enter emailOrPhone!!"),
      id: yup.mixed().notRequired(),
    })
    .noUnknown()
    .strict(),
  query: yup.object({
    type: yup.string().required("Please enter Type!!"),
  }).noUnknown().strict(),
};

module.exports = { 
  getUserSettings, 
  getSettingMeta, 
  postAddContact,
  putChangePrimaryContact
 };
