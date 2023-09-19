/* eslint-disable no-unused-vars */
/* eslint-disable id-length */
/* eslint-disable no-console */
/* eslint-disable no-undef */

const settingFunction = require("../functions/settings.functions");

/**
       * 
       * @param {*} req 
       * @param {*} res 
       */
module.exports.getUserSettings = async (req, res) => {
  try {
    let {status, ...restData}  = await settingFunction.getUserSettingsFunc(req,res);
    res.status(status).json({
      ...restData
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error in User Setting  fetch" });
  }
};



module.exports.getSettingMeta = async (req, res) => {
  try{
    let {status, ...restData} = await settingFunction.getSettingMetaFunc(req,res);
    res.status(status).json({
      ...restData
    });
  }catch(err){
    console.log(err);
    res.status(500).json({ message: "Error in User Setting  fetch" });
  }

};

module.exports.postAddContact = async (req, res) => {
  try{
    let {status, ...restData} = await settingFunction.postAddContactFunc(req,res);
    res.status(status).json({
      ...restData
    });
  }catch(err){
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports.putDeleteContact = async (req, res) => {
  try{
    let {status, ...restData} = await settingFunction.putDeleteContactFunc(req,res);
    res.status(status).json({
      ...restData
    });
  }catch(err){
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports.getPrimaryContact = async (req, res) => {
  try{
    let {status, ...restData} = await settingFunction.getPrimaryContactFunc(req,res);
    res.status(status).json({
      ...restData
    });
  }catch(err){
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};