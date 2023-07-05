const express = require("express");
const router = express.Router();

import { getFate, postFate } from "../controllers//fortune";

router.get("/", getFate);
router.post("/", postFate);

export default router;
