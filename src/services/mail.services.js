import { sendGmail } from "../utils/nodemailer.util.js";

export const newUserMail = async (nombre, email) => {
  const tema = "Nuevo usuario registrado";
  const contenido = `
    <h3> Hola ${nombre}! </h3>
    <br>
    <p> Ya estás registrado en la app de E-Commerce. </p>
  `;
  try {
    await sendGmail(email, tema, contenido);
  } catch (error) {
    console.log(error);
  }
};

export const confirmOrderMail = async (nombre, email, products) => {
  const tema = "Compra confirmada";
  const encabezado = `
      <h3> Hola ${nombre}! </h3>
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
          <td>
            <p>
              $${prod.price.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </td>
        </tr>
      `
      )
      .join("");
  };

  const priceTotal = (products) => {
    // Calcular el total de la compra:
    let total = 0;
    products.forEach((prod) => (total += prod.price));
    // Convertir a formato 1,000.00
    total = total.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return total;
  };

  const contenido =
    encabezado +
    ` 
  <thead>
    <tr>
      <th>Artículo:</th>
      <th>Precio:</th>
    </tr>
  </thead>
  <tbody>` +
    tableRows(productos) +
    `</tbody>` +
    `<p>Total: $${priceTotal(productos)}</p>`;

  await sendGmail(email, tema, contenido);
};
