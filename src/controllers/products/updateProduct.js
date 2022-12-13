import fs from "fs";

export default function updateProduct() {
  const { id } = req.params;
  const body = req.body;
  try {
    const products = JSON.parse(
      fs.readFileSync("src/utils/mockups/mockProducts.JSON", "utf-8")
    );
    let status;
    let response;
    if (!products.some((elem) => elem.id === id)) {
      status = 404;
      response = {
        msg: "No existe ese producto",
      };
    } else {
      status = 200;
      const searchProduct = products.find((elem) => elem.id === id);
      const updateProduct = {
        ...searchProduct,
        // Los argumentos iguales se pisan obteniendo un objeto modificado, esta es la manera mas simple al no definir que parametros van a ser modificables.
        ...body,
      };
      //agregar modificacion al array
      products.splice(products.indexOf(), 1, updateProduct);
      response = updateProduct;
    }
    res.status(status).json({ response });
  } catch (error) {
    console.log(error);
  }
}
