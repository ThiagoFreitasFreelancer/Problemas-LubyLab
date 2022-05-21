const express =  require(`express`);
const db = require("./src/Database/models");
const accountRouter = require('./src/Routes/account.routes');
const vehiclesRouter = require('./src/Routes/vehicles.routes');
const loginRouter = require('./src/Routes/login.routes');
const passport = require('passport');
const session = require('express-session');
const MySQLStore = require("express-mysql-session")(session);
require('./src/Modules/Authentication/auth')(passport);


function authenticationMiddleware(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/login?fail=true');
}

const app = express();
app.use(express.json());

app.use(session({
    store: new MySQLStore({
        host: "127.0.0.1",
        port: "3306",
        user: "root",
        password: "password",
        database: "autoluby",
    }),
    secret: '1234',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60 * 60 * 1000 }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(loginRouter);
app.use(authenticationMiddleware, accountRouter);
app.use(authenticationMiddleware, vehiclesRouter);

app.listen(3000, () => console.log("server is running!"));