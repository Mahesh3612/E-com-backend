// const express = require("express");
import express, { application } from "express"
import { login, profile, register } from "../controllers/user.js";


 const router = express.Router();



router.post("/register",register)

router.post("/login",login)

router.get("/profile/:id",profile)

export default router




