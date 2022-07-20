const User = require('../models/User');

const UserController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();

      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  deleteUser: async (req, res) => {
    try {
      const result = await User.deleteOne({ _id: req.params.id });

      if (result.deletedCount) {
        res.status(200).json(result);
      } else {
        res.status(404).json({
          mess: 'Not Found User !!!',
        });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = UserController;
