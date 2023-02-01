const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const authMiddleWare = require("../middleware/authentication");

// Route 1: Signin user using POST request : http://localhost:5000/signin
router.post(
  "/signin",
  [
    body().exists(),
    body("name").isLength({ min: 3 }),
    body("email").isEmail(),
    body("phoneno", "Number should be 10 digit long")
      .isLength({ min: 10 })
      .exists()
      .isNumeric(),
    body("password").isLength({ min: 8 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { name, email, phoneno, work, password } = req.body;

      if (!name || !email || !phoneno || !work || !password) {
        return res.status(400).json({ msg: "Please fill all the fields" });
      }

      const checkUser = await User.findOne({ email: req.body.email });
      if (checkUser) {
        res.status(400).json({ msg: "User Already Exists" });
      } else {
        User.create(req.body).then((data) => {
          res.status(200).json({ msg: data });
        });
      }
    } catch (error) {
      console.log(error);
      res.json({ error: "internal server error" });
    }
  }
);

// Route 2: Login user using POST request : http://localhost:5000/login
router.post(
  "/login",
  [
    body("email").isEmail(),
    body("password").isLength({ min: 8 }),
    body().exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const userCheck = await User.findOne({ email: req.body.email });
      if (!userCheck) {
        res.status(400).json({ error: "No user found" });
      } else {
        const checkPassword = await bcrypt.compare(
          req.body.password,
          userCheck.password
        );
        if (checkPassword) {
          const authToken = await userCheck.generateAuthTOken();
          res.cookie("jwttoken", authToken, {
            httpOnly: true,
          });

          res.status(200).json({ msg: userCheck, authToken });
        } else {
          res.status(400).json({ error: "Invalid password" });
        }
      }
    } catch (error) {
      console.log(error);
      res.json({ error: "internal server error" });
    }
  }
);

//Route 3: Get user data using GET Request"
router.get("/about", authMiddleWare, async (req, res) => {
  try {
    let entry = await User.findById(req.userId);
    console.log(entry);
    if (entry) {
      res.status(200).json({ data:entry});
    } else {
      res.status(400).json({ msg: "No user found" });
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({ msg: "internal server error" });
  }
});

//Route 4
router.post(
  "/contact",
  body("message", "Message should be atleast of 2 words")
    .exists()
    .isLength({ min: 2 }),
  authMiddleWare,
  async (req, res) => {
    try {
      let entry = await User.findById(req.userId);
      console.log(entry);
      if (entry) {
        console.log(req.body.message)
        entry.addContactdata(req.body.message)
        res.status(200).json({ msg:"success" });
      } else {
        res.status(400).json({ msg: "No user found" });
      }
    } catch (error) {
      console.log(error);
      res.status(401).json({ msg: "internal server error" });
    }
  }
);

module.exports = router;
