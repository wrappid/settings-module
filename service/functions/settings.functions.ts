/* eslint-disable no-unused-vars */
import { communicate, configProvider, coreConstant, databaseActions, databaseProvider } from "@wrappid/service-core";

import moment from "moment/moment";

export const getUserSettingsFunc = async (req:any, res: any) => {
  try {
    let  data = await databaseActions.findAll("application", "UserSettings", {
      where: {
        userId: req.user.userId,
      },
    });
    return { status: 200, message: "User Setting  fetched", data };
  } catch (err) {
    console.log(err);
    throw err;
    // res.status(500).json({ message: "Error in User Setting  fetch" });
  }
};




export const postAddContactFunc = async (req:any, res:any) => {
  try {
    let person = await databaseActions.findOne("application","Persons",{
      where: {
        userId: req.user.userId
      }
    });
    let personId = person.id;
    let exists = await databaseActions.findOne("application","PersonContacts",{
      where: {
        data: req.body.data.toString(),
        _status: coreConstant.entityStatus.ACTIVE,
        personId: personId,
      },
    });
    if (exists) {
      console.log("Contact already exists", exists.id);
      return{status: 500, message: "Contact already exists"};
      
    } else {
      let createdContact = await databaseActions.create("application","PersonContacts",{
        ...req.body,
        type: isNaN(req.body.data)
          ? coreConstant.contact.EMAIL
          : coreConstant.contact.PHONE,
        _status: coreConstant.entityStatus.ACTIVE,
        personId: personId,
      });
      console.log(
        "Person contact created, id:",
        createdContact.id,
        ", Person Id: ",
        personId
      );
    
      return{status: 200, message: "Contact info created successfully"};
    }
  } catch (err) {
    console.error(err);
    return {status:500,  message: "Contact info create error"};
  }
};

export const putDeleteContactFunc = async (req:any, res:any) => {
  try {
    let contact = await databaseActions.findByPk("application","PersonContacts",req.params.id);
    if (contact.primaryFlag) {
      console.log("Can not delete primary mail");
      return {status:500 ,message: "Can not delete primary contact. Change primary then try again" };
      
    }
    let [nrows, rows] = await databaseActions.update("application","PersonContacts",
      {
        isActive: false,
        _status: coreConstant.entityStatus.DELETED,
        deletedAt: moment(),
        deletedBy: req.user.userId,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    console.log("Person contact deleted, id:", req.params.id);
    return {status: 200 ,message: "Contact info deleted successfully" };
    
  } catch (err) {
    console.error(err);
    return {status:500 ,message:"Contact info delete error" };
  }
};

export const getPrimaryContactFunc = async (req:any, res:any) => {
  try {
    let person = await databaseActions.findOne("application","Persons",{
      where: {
        userId: req.user.userId
      }
    });
    let personId = person.id;
    let contactType = req.params.contactType;
    let personContacts = await databaseActions.findAll("application","PersonContacts",{
      where: {
        personId: personId,
        type: contactType,
        verified: true,
      },
    });

    if (personContacts && personContacts.length > 0) {
      // send 200
      console.log("Contact info fetched successfully");
      return {status:200, message: "Contact info fetched successfully",data: {
        rows: personContacts
      },};
      
    } else {
      // send 204
      return {status: 204, message: `No ${contactType}(s) found.`};
    }
  } catch (err) {
    console.error(err);
    return {status: 500, message: "Contact info fetch error", error: err };
  }
};

export const putChangePrimaryContactFunc = async (req:any, res:any) => {
  try {
    let personId = req.user.personId;
    let existingContact = await databaseActions.findOne("application","PersonContacts",{
      where: {
        type: req.query.type,
        data: req.body.data,
        primaryFlag: true,
      },

     
    });
    if (existingContact) {
      console.log(
        "Already a primary contact for other person: ",
        existingContact.personId
      );
      return {status:500, message: "Already a primary contact for other user" };
      // res
      //   .status(500)
      //   .json({ message: "Already a primary contact for other user" });
    }
    
  
    else if (req.user.email == req.body.data) {
      console.log("Please add other email");
      return {status:500, message: "Please add other email" };
    // res.status(500).json({ message: "Please add other email" });
    }
    else {
      let result = await databaseProvider.application.sequelize.transaction(async (t:any) => {
        await databaseActions.update("application","PersonContacts",
          { primaryFlag: false },
          {
            where: {
              personId: personId,
              type: req.query.type,
            }
          },
          {
            transaction: t
          }
        );
        console.log("All contacts made non primary");
        await databaseActions.update("application","PersonContacts",
          { primaryFlag: true },
          {
            where: {
              id: req.body.id,
            }
          },
          {
            transaction: t
          }
        );
        console.log(
          "Contact made primary id:,",
          req.body.id,
          ", contact:",
          req.body.data
        );

        let uData:any = {};
        let pData:any = {};
        if (req.query.type == coreConstant.contact.PHONE) {
          uData[coreConstant.contact.PHONE] = req.body.data;
          pData["phoneVerified"] = true;
        }
        if (req.query.type == coreConstant.contact.EMAIL) {
          uData[coreConstant.contact.EMAIL] = req.body.data;
          pData["emailVerified"] = true;
        }

        console.log(
          "U DATA",
          uData,
          "P data:",
          pData,
          "id:",
          req.user.userId
        );
        await databaseActions.update("application","Users",uData, {
          where: {
            id: req.user.userId,
          }
        },
        {
          transaction: t
        }
        );
        await databaseActions.update("application","Persons",pData, {
          where: {
            id: personId,
          }
        },
        {
          transaction: t,
        });
        console.log("person table updated");
      });
      console.log("Primary contact updated");
      return {status:200, message: "Primary contact updated" };
      // res.status(200).json({ message: "Primary contact updated" });
    }
  } catch (err) {
    console.log(err);
    return {status:500 ,message: "Error to fetch Contacts data"  };
    // res.status(500).json({ message: "Error to fetch Contacts data" });
  }
};

