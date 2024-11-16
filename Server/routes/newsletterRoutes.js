const express = require("express");
const express = express.Router();
const {getNewsletter , createNewsletter} =require("../controllers/newsletterController")
const {jwtAuthMiddleware}=require("../middleware/jwtMiddleware");

router.get("/",getNewsletter);
router.post("/",jwtAuthMiddleware,createNewsletter);

