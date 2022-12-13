import express from "express";
import getOneProduct from "../controllers/products/getOneProduct"
import getProducts from "../controllers/products/getProducts"
import postProduct from "../controllers/products/postProduct"
import updateProduct from "../controllers/products/updateProduct"
import deleteProduct from "../controllers/products/deleteProduct"

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getOneProduct);
router.post("/", postProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
