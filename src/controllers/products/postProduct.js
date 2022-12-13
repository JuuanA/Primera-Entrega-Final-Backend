import { generarIdProduct } from "../../utils/generateID.js";
import fs from "fs";

export default function postProduct() {
  const { name, price, img, description, stock } = req.body;
  const data = {
    name,
    price,
    img,
    description,
    stock,
    id: generarIdProduct(),
    timestamp: new Date().toLocaleString("es-AR"),
    code: generarIdProduct(),
  };
  try {
    const products = JSON.parse(
      fs.readFileSync("src/utils/mockups/mockProducts.JSON", "utf-8")
    );
    products.push(data);
    fs.writeFileSync(
      "src/utils/mockups/mockProducts.JSON",
      JSON.stringify(products, null, 2)
    );

    res.status(200).json({
      ok: true,
      msg: "producto cargado con exíto",
      response: data,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ error });
  }
}
