const { databaseActions } = require("@wrappid/service-core");

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

module.exports = { getUserSettingsFunc, getSettingMetaFunc };
