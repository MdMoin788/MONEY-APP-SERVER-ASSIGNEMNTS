const express = require("express")
const User = require("../models/userModel");
const jwt = require("jsonwebtoken")
const Router = express.Router()
require("dotenv").config();
const newToken = (user) => {
    return jwt.sign({ user }, process.env.JWT_SECRET_KEY)
}
// ------------------------------------------- SignUp ---------------------------------------------------
const register = async (req, res) => {
    let user = await User.findOne({ email: req.body.email }).lean().exec()
    if (user) {
        return res.send("Please try another email")
    }
    user = await User.create(req.body)
    delete user.password;
    const token = newToken(user)
    return res.send({ user, token, status: true })
}
// --------------------------------------------- Login -----------------------------------------------------
const login = async (req, res) => {
    let user = await User.findOne({ email: req.body.email }, )
    if (!user) {
        return res.send("Please try another email password")
    }
    const match = user.checkPassword(req.body.password);
    if (!match) {
        return res.send("please try another email or password")
    }

    const token = newToken(user)
    return res.send({ user, token, status: true })
}
module.exports = { register, login }