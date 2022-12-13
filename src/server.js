import express from "express";
import cart from "./routes/cart.js"
import products from "./routes/products.js"

const app = express();

const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
router.use("/api/products", products);
router.use("/api/cart", cart);
router.use("/", (req, res) => {
  res.status(404).json({
    msg: "no existe la ruta",
  });
});
app.listen(port, async () => {
  console.log(`Escuchando server ${port}`);
});
