export function getLogin(req, res) {
  if (req.isAuthenticated()) {
    const user = req.user;
    console.log("Usuario logueado!");
    res.send("login-ok", {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    });
  } else {
    console.log("No esta registrado");
    res.send("No esta registrado");
  }
}

export function postLogin(req, res) {
  const user = req.user;
  console.log(user);
  res.send(user);
}

export function getFailLogin(req, res) {
  console.log("Error en el login");
  res.send("login-error", {});
}

export function getSignup(req, res) {
  res.send("Debería redireccionar al registro");
}

export function postSignup(req, res) {
  const user = req.user;
  console.log(user);
  res.send(user);
}

export function getFailSignup(req, res) {
  console.log("Error en el registro");
  res.send("signup-error", {});
}

export function logout(req, res) {
  console.log("Logout");
  res.send("Cerrar sesión");
}
