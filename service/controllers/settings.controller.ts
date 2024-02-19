import * as settingFunction from "../functions/settings.functions";
import { Request, Response} from "express";
/**
       * 
       * @param {*} req 
       * @param {*} res 
       */
export const getUserSettings = async (req:Request, res:Response) => {
  try {
    let {status, ...restData}  = await settingFunction.getUserSettingsFunc(req,res);
    res.status(status).json({
      ...restData
    });
  } catch (err:any) {
    console.log(err);
    res.status(500).json({ message: "Error in User Setting  fetch" });
  }
};




export const postAddContact = async (req:Request, res:Response) => {
  try{
    let {status, ...restData} = await settingFunction.postAddContactFunc(req,res);
    res.status(status).json({
      ...restData
    });
  }catch(err:any){
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

export const putDeleteContact = async (req:Request, res:Response) => {
  try{
    let {status, ...restData} = await settingFunction.putDeleteContactFunc(req,res);
    res.status(status).json({
      ...restData
    });
  }catch(err:any){
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

export const getPrimaryContact = async (req:Request, res:Response) => {
  try{
    let {status, ...restData} = await settingFunction.getPrimaryContactFunc(req,res);
    res.status(status).json({
      ...restData
    });
  }catch(err:any){
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

export const putChangePrimaryContact = async (req:Request, res:Response) => {
  try{
    // res.status(200).json({message: "API call succesfully!!"});
    let {status, ...restData} = await settingFunction.putChangePrimaryContactFunc(req,res);
    res.status(status).json({
      ...restData
    });
  }catch(err:any){
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};