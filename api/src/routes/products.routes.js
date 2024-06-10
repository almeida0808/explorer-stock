const { Router } = require("express");
const ProductsController = require("../controllers/ProductsController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const verifyUserAuthorization = require("../middlewares/verifyUserAuthorization");

const productsRoutes = Router();

const productsController = new ProductsController();

productsRoutes.use(ensureAuthenticated);

productsRoutes.get(
  "/",
  verifyUserAuthorization(["admin", "costumer"]),
  productsController.index
);
productsRoutes.post(
  "/",
  verifyUserAuthorization(["admin", "sale"]),
  productsController.create
);

module.exports = productsRoutes;
