import express from "express";

import getCart from "../controllers/cart/getCart";
import postCart from "../controllers/cart/postCart";
import addProductsCart from "../controllers/cart/addProductsCart";
import deleteCart from "../controllers/cart/deleteCart";
import deleteProductCart from "../controllers/cart/deleteProductCart";

const router = express.Router();

router.get("/:id/products", getCart);
router.post("/", postCart);
router.post("/:id/products", addProductsCart);
router.delete("/:id", deleteCart);
router.delete("/:id/products/:id_prod", deleteProductCart);

export default router;
