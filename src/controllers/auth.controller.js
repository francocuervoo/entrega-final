import { sendGmail } from "../utils/nodemailer.util.js";
import { UserModel } from "../models/user.model.js";
import { newUserMail } from "../services/mail.services.js";

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
  if (req.user) {
    res.redirect("/cart");
  } else {
    res.redirect("/login-error");
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
  const id = req.user._id;
  const firstName = req.user.firstName;
  const email = req.user.email;
  try {
    if (req.file) {
      const realPath = req.file.path.replace("public/", "");
      const user = await UserModel.findById(id);
      user.imageUrl = realPath;
      await user.save();
      console.log(user);
    }
    await newUserMail(firstName, email);
    res.redirect("/cart");
  } catch (error) {
    console.log(error);
    res.redirect("/signup-error");
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
