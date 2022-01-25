export const cartView = (req, res) => {
    res.sendFile("cart.html", { root: "./public" });
  };
  
  export const loginView = (req, res) => {
    res.sendFile("login.html", { root: "./public" });
  };
 
  export const signupView = (req, res) => {
    res.sendFile("signup.html", { root: "./public" });
  };
 
  export const failLoginView = (req, res) => {
    res.sendFile("fail-login.html", { root: "./public" });
  };
 
  export const failSignupView = (req, res) => {
    res.sendFile("fail-signup.html", { root: "./public" });
  };
 
