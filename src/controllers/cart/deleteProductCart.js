import fs from "fs";

export default function deleteProductCart() {
  try {
    const { id, idProd } = req.params;
    const parseCart = JSON.parse(
      fs.readFileSync(`src/utils/mockups/carts/${id}.JSON`, "utf-8")
    );
    parseCart.products = parseCart.products.filter(
      (product) => product.id !== idProd
    );
    fs.writeFileSync(
      `src/utils/mockups/carts/${id}.JSON`,
      JSON.stringify(parseCart, null, 2)
    );
    res.status(200).json({
      ok: true,
      msg: `Producto ${idProd} eliminado con exito del carrito ${id}`,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      ok: false,
      msg: "No existe el carrito",
    });
  }
}
