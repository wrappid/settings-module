module.exports.getSettingMeta = async (req, res) => {
  db.SettingMeta.findAll()
    .then((data) => {
      console.log("SettingMeta fetched successfully");
      res
        .status(200)
        .json({ message: "SettingMeta fetched successfully", data: data });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Error to fetch settingMeta" });
    });
};

module.exports.postSettingMeta = async (req, res) => {
  try {
    var errList = [],
      ids = [];
    for (var i = 0; i < req.body.length; i++) {
      try {
        var d = await db.SettingMeta.create(req.body[i]);
        ids.push(d.id);
      } catch (err) {
        console.log(err.name);
        if (err.name == "SequelizeUniqueConstraintError")
          errList.push(req.body[i]);
        else throw err;
      }
    }
    console.log("Setting meta created successfully");
    res.status(200).json({
      message: "Setting meta created successfully",
      errList: errList,
      ids: ids,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error to create setting meta" });
  }
};

module.exports.putSettingMeta = async (req, res) => {
  db.SettingMeta.update(req.body, {
    where: { id: req.params.id },
  })
    .then((data) => {
      if (data[0] > 0) {
        console.log("settingmeta updated successfully");
        res.status(200).json({ message: "settingmeta updated successfully" });
      } else {
        res.status(500).json({ message: "No setting meta updated" });
      }
    })
    .catch((err) => {
      console.log(err);
      if (err.name == "SequelizeUniqueConstraintError")
        res.status(500).json({ message: "This name already exist" });
      else res.status(500).json({ message: "Error to update setting meta" });
    });
};

module.exports.postUserSettings = async (req, res) => {
  try {
    if (!req.body.name) {
      throw "No settings name mentioned";
    }

    let settingsFound = await db.UserSettings.findOne({
      where: {
        name: req.body.name,
        userId: req.user.userId,
      },
    });

    if (settingsFound) {
      console.log("Settings found", req.body.name);
      let [nrows, rows] = await db.UserSettings.update(req.body, {
        where: {
          userId: req.user.userId,
        },
      });
    } else {
      console.log("Settings creating", req.body.name);
      let d = await db.UserSettings.create({
        ...req.body,
        userId: req.user.userId,
      });
      console.log("Settings created", d.id);
    }

    res.status(200).json({
      message: "User Setting  updated",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error in User Setting  update" });
  }
};

module.exports.getUserSettings = async (req, res) => {
  try {
    var data = await db.UserSettings.findAll({
      where: {
        userId: req.user.userId,
      },
    });
    res.status(200).json({
      message: "User Setting  fetched",
      data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error in User Setting  fetch" });
  }
};

module.exports.postAddContact = async (req, res) => {
  try {
    let personId = req.user.personId;
    var exists = await db.PersonContacts.findOne({
      where: {
        data: req.body.data.toString(),
        personId: personId,
      },
    });
    if (exists) {
      console.log("Contact already exists", exists.id);
      res.status(500).json({
        message: "Contact already exists",
      });
    } else {
      var createdContact = await db.PersonContacts.create({
        ...req.body,
        type: isNaN(req.body.data)
          ? constant.contact.EMAIL
          : constant.contact.PHONE,
        _status: entityStatus.ACTIVE,
        personId: personId,
      });
      console.log(
        "Person contact created, id:",
        createdContact.id,
        ", Person Id: ",
        personId
      );
      res.status(200).json({
        message: "Contact info created successfully",
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Contact info create error",
      error: err,
    });
  }
};

module.exports.updateAddContact = async (req, res) => {
  try {
    var contact = await db.PersonContacts.findByPk(req.params.id);
    if (contact.primaryFlag) {
      console.log("Can not delete primary mail");
      res.status(500).json({
        message:
          "Can not delete primary contact. Change primary then try again",
      });
    }
    var [nrows, rows] = await db.PersonContacts.update(
      {
        isActive: false,
        _status: entityStatus.DELETED,
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
    res.status(200).json({
      message: "Contact info deleted successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Contact info delete error",
    });
  }
};

module.exports.deleteUserAccount = async (req, res) => {
  var userId = req.user.userId;
  db.Users.update(
    {
      isActive: false,
    },
    {
      where: {
        id: userId,
      },
    }
  )
    .then(([nrows, rows]) => {
      if (nrows > 0) {
        console.log("User account deleted");
        res.status(200).json({ message: "User account deleted" });
      } else {
        console.log(err);
        res.status(500).json({ message: "User account delete error" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "User account delete error" });
    });
};

module.exports.logout = async (req, res) => {
  try {
    console.error("user:: ", req.user);
    deviceId = await getDeviceId(req);
    sessions = await db.SessionManager.findAll({
      where: {
        userId: req.user.userId,
      },
    });
    for (var s = 0; s < sessions.length; s++) {
      currSession = sessions[s];
      if (bcrypt.compareSync(deviceId, currSession.deviceId)) {
        [nrows, rows] = await db.SessionManager.update(
          { refreshToken: "" },
          {
            where: {
              id: currSession.id,
            },
          }
        );
        if (nrows > 0) {
          console.log("Successfully logged out");
          res.status(200).json({ message: "Successfully logged out" });
        } else {
          console.error("Database error in logout");
          res.status(500).json({ message: "Database error" });
        }
        break;
      }
    }
  } catch (err) {
    console.error("Database error in logout", err);
    res.status(500).json({ message: "Database error" });
  }
};
