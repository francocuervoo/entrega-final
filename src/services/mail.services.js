import { sendGmail } from "../utils/nodemailer.util.js";

export const confirmOrder = async (req, res) => {
    const { cartId } = req.params;
    try {
      const cart = await cartServices.getCartById(cartId);
      const receptor = req.user.email;
      const tema = "Compra confirmada";
      const encabezado = `
      <h3> Hola ${req.user.firstName}! </h3>
      <br>
      <h4> Detalle de tu compra:</h4>
    `;
      const tableRows = (products) => {
        return products
          .map(
            (prod) =>
              `
        <tr>
          <td><p>${prod.title}:</p></td>
          <td><p>$${prod.price}</p></td>
        </tr>
      `
          )
          .join("");
      };
      const contenido = encabezado + tableRows(cart.products);
      sendGmail(receptor, tema, contenido)
        .then((response) => console.log(response.envelope))
        .catch((error) => console.log(error));
    } catch (error) {
      clog(error);
    }
  };