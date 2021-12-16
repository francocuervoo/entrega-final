import { sendGmail } from "../utils/nodemailer.util.js";
import { UserModel } from "../models/user.model.js";

export function getLogin(req, res) {
  if (req.isAuthenticated()) {
    const user = req.user;
    console.log("Usuario logueado!");
    res.send(user);
  } else {
    console.log("No esta registrado");
    res.send("No esta registrado");
  }
}

export function postLogin(req, res) {
  //const user = req.user;
  ///console.log(user);
  //res.send(user);
  if(req.user){
    res.redirect("/cart")
  } else {
    res.redirect("/login-error")
  }
}

export function getFailLogin(req, res) {
  console.log("Error en el login");
  res.send("login-error");
}

export function getSignup(req, res) {
  res.send("Debería redireccionar al registro");
}

export async function postSignup(req, res) {
  try{
    if(req.file){
      const realPath = req.file.path.replace("public/", "");
      const id = req.user._id;
      const user = await UserModel.findById(id);
      user.imageUrl = realPath;
      await user.save();
      console.log(user);
    }
      // Envia un mail al usuario notificandole el registro:
      const receptor = req.user.email;
      const tema = "Nuevo usuario registrado";
      const contenido = `
        <h3> Hola ${req.user.firstName}! </h3>
        <br>
        <p> Ya estás registrado en la app de E-Commerce. </p>
      `;
      sendGmail(receptor, tema, contenido)
        .then((response) => console.log(response.envelope))
        .catch((error) => console.log(error));
      // Devolver una respuesta al front:
      res.redirect("/cart");
  } catch(error){
    console.log(error);
    res.redirect("/signup-error")
  }
}

export function getFailSignup(req, res) {
  console.log("Error en el registro");
  res.send("signup-error");
}

export function logout(req, res) {
  console.log("Logout");
  res.send("Cerrar sesión");
}
