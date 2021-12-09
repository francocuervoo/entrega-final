import bcrypt from "bcrypt";
import { Strategy } from "passport-local";
import passport from "passport";
import { UserModel } from "../models/user.model.js";

function isValidPassword(user, password) {
  return bcrypt.compareSync(password, user.password);
}

passport.use(
  "login",
  new Strategy(
    {
      usernameField: "email",
      passReqToCallback: true,
    },
    (email, password, done) => {
      UserModel.findOne({ email }, (err, user) => {
        if (err) return done(err);
        if (!user) {
          console.log("Usuario no encontrado!");
          return done(null, false);
        }
        if (!isValidPassword(user, password)) {
          console.log("Invalid password");
          return done(null, false);
        }
        return done(null, user);
      });
    }
  )
);

function createHash(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
}

passport.use(
  "signup",
  new Strategy(
    {
      usernameField: "email",
      passReqToCallback: true,
    },
    (req, email, password, done) => {
      UserModel.findOne({ email }, (err, user) => {
        if (err) return done(err);
        if (user) {
          console.log("El usuario existe!");
          return done(null, false);
        }
        const newUser = {
          email: req.body.email,
          password: createHash(password),
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          address: req.body.address,
          age: req.body.age,
          phone: req.body.phone,
        };

        console.log(newUser);

        UserModel.create(newUser, (err, user) => {
          if (err) return done(err);
          console.log("Usuario creado");
          return done(null, user);
        });
      });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  UserModel.findById(id, done);
});

export default passport;
