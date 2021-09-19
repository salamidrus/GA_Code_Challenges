const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  createUser: async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = await User.create({
        email: req.body.email,
        password: hashedPassword,
      });

      if (!user) {
        return res.status(400).json({
          status: "failed",
          message: "Unable to save the data to database",
        });
      }

      const payload = {
        email: user.dataValues.email,
        id: user.dataValues.id,
        role: user.role,
      };

      jwt.sign(payload, "passwordKita", { expiresIn: 3600 }, (err, token) => {
        return res.status(200).json({
          status: "success",
          message: "Logged in successfully",
          data: token,
        });
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "failed",
        message: error.message || "Internal Server Error",
      });
    }
  },
  loginUser: async (req, res) => {
    try {
      const user = await User.findOne({
        where: {
          email: req.body.email,
        },
      });

      if (!user) {
        return res.status(401).json({
          status: "failed",
          message: "Invalid email or passsword",
        });
      }

      const checkPassword = await bcrypt.compare(
        req.body.password,
        user.dataValues.password
      );

      if (!checkPassword) {
        return res.status(401).json({
          status: "failed",
          message: "Invalid email or passsword",
        });
      }

      if (!user) {
        return res.status(400).json({
          status: "failed",
          message: "Unable to save the data to database",
        });
      }

      const payload = {
        email: user.dataValues.email,
        id: user.dataValues.id,
        role: user.role,
      };

      jwt.sign(payload, "passwordKita", { expiresIn: 3600 }, (err, token) => {
        return res.status(200).json({
          status: "success",
          message: "Logged in successfully",
          data: token,
        });
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "failed",
        message: error.message || "Internal Server Error",
      });
    }
  },
  getAllUser: async (req, res) => {
    try {
      const users = await User.findAll();

      if (!users.length) {
        return res.status(400).json({
          status: "failed",
          message: "There's no user in database!",
        });
      }
      return res.status(200).json({
        status: "success",
        message: "Successfully retrieved users!",
        data: users,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "failed",
        message: error.message || "Internal Server Error",
      });
    }
  },
  viewUser: async (req, res) => {
    try {
      const user = await User.findOne({
        where: {
          id: req.params.id,
        },
      });

      if (!user) {
        return res.status(400).json({
          status: "failed",
          message: "User not found!",
        });
      }
      return res.status(200).json({
        status: "success",
        message: "Successfully retrieved user!",
        data: user,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "failed",
        message: error.message || "Internal Server Error",
      });
    }
  },
  updateUser: async (req, res) => {
    try {
      const [updateUser] = await User.update(
        {
          ...req.body,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );

      if (!updateUser) {
        return res.status(400).json({
          status: "failed",
          message: "User not found!",
        });
      }

      const updatedUser = await User.findOne({
        where: {
          id: req.params.id,
        },
      });

      return res.status(200).json({
        status: "success",
        message: "Successfully updated user!",
        data: updatedUser,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "failed",
        message: error.message || "Internal Server Error",
      });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const deleted = await User.destroy({
        where: {
          id: req.params.id,
        },
      });

      if (!deleted) {
        return res.status(400).json({
          status: "failed",
          message: "Failed to delete!",
        });
      }

      return res.status(200).json({
        status: "success",
        message: "Successfully delete user!",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "failed",
        message: error.message || "Internal Server Error",
      });
    }
  },
};
