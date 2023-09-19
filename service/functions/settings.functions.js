const { databaseActions, coreConstant } = require("@wrappid/service-core");
const moment = require("moment/moment");

const getUserSettingsFunc = async (req, res) => {
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

const getSettingMetaFunc = async (req, res) => {
  try {
    let data = await databaseActions.findAll("application", "SettingMeta", {});
    if (data.length > 1) {
      console.log("SettingMeta fetched successfully");
      return {
        status: 200, message: "SettingMeta fetched successfully", data
      };
      //   res
      //     .status(200)
      //     .json({ data: data, message: "SettingMeta fetched successfully" });
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};



const postAddContactFunc = async (req, res) => {
  try {
    let person = await databaseActions.findOne("application","Persons",{
      where: {
        userId: req.user.userId
      }
    })
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
      return{status: 500, message: "Contact already exists"}
      
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
    
      return{status: 200, message: "Contact info created successfully"}
    }
  } catch (err) {
    console.error(err);
    return {status:500,  message: "Contact info create error"}
  }
};

const putDeleteContactFunc = async (req, res) => {
  try {
    let contact = await databaseActions.findByPk("application","PersonContacts",req.params.id);
    if (contact.primaryFlag) {
      console.log("Can not delete primary mail");
      return {status:500 ,message: "Can not delete primary contact. Change primary then try again" }
      
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
    return {status: 200 ,message: "Contact info deleted successfully" }
    
  } catch (err) {
    console.error(err);
    return {status:500 ,message:"Contact info delete error" }
  }
};

const getPrimaryContactFunc = async (req, res) => {
  try {
    let person = await databaseActions.findOne("application","Persons",{
      where: {
        userId: req.user.userId
      }
    })
    let personId = person.id;
    let contactType = req.params.contactType;
    var personContacts = await databaseActions.findAll("application","PersonContacts",{
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
      },}
      
    } else {
      // send 204
      return {status: 204, message: `No ${contactType}(s) found.`}
    }
  } catch (err) {
    console.error(err);
    return {status: 500, message: "Contact info fetch error", error: err }
  }
};

module.exports = { getUserSettingsFunc, getSettingMetaFunc, postAddContactFunc, putDeleteContactFunc, getPrimaryContactFunc };
