const express = require("express");
const taxReceiptRouter = express.Router();
const taxReceiptController = require("./../controllers/taxReceiptController");

taxReceiptRouter.get("/", taxReceiptController.getAllReceipts);

module.exports = taxReceiptRouter;