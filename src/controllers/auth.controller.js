import { UserModel } from "../models/user.model.js";
import { newUserMail } from "../services/mail.services.js";
import { logConsol } from "../utils/logger.util.js"

export function getLogin(req, res) {
  if (req.isAuthenticated()) {
    const user = req.user;
    logConsol("Usuario logueado");
    res.send(user);
  } else {
    logConsol("No está registrado");
    res.send("No está registrado");
  }
}

export function postLogin(req, res) {
  if (req.user) {
    res.send(req.user)
    //res.redirect("/cart");
  } else {
    res.redirect("/login-error");
  }
}

export function getFailLogin(req, res) {
  logConsol("Error en el login");
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
      logConsol(user);
    }
    await newUserMail(firstName, email);
    res.redirect("/cart");
  } catch (error) {
    logConsol(error);
    res.redirect("/signup-error");
  }
}

export function getFailSignup(req, res) {
  logConsol("Error al hacer el registro");
  res.send("signup-error");
}

export function logout(req, res) {
  logConsol("Logout");
  res.send("Cerrar sesión");
}
