import fs from "fs";

export default function getOneProduct() {
  const { id } = req.params;
  try {
    const products = JSON.parse(
      fs.readFileSync("src/utils/mockups/mockProducts.JSON", "utf-8")
    );
    let status;
    let response;
    if (products.length === 0 || !products.some((elem) => elem.id === id)) {
      status = 404;
      response = {
        msg: "No se encuentra el producto",
      };
    } else {
      status = 200;
      response = products.find((elem) => elem.id === id);
    }
    res.status(status).json({ response });
  } catch (error) {
    console.log(error);
  }
}
