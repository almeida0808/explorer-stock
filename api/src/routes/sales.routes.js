const { Router } = require("express");
const SalesController = require("../controllers/SalesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const verifyUserAuthorization = require("../middlewares/verifyUserAuthorization");

const salesRoutes = Router();

const salesController = new SalesController();

salesRoutes.use(ensureAuthenticated, verifyUserAuthorization());

salesRoutes.get(
  "/",
  verifyUserAuthorization(["admin", "sale", "costumer"]),
  salesController.index
);

module.exports = salesRoutes;
