const passport = require('passport')
const localStrategy = require('passport-local').Strategy;
const accountController = require('../../Controller/account.controller');
const routerLogin = require('../../Routes/login.routes');
const bcrypt = require("bcryptjs");

const accountcontroller = new accountController()


module.exports = function(passport){

      async function getAccount(login){

        return await accountcontroller.findAccountLogin(login);

      }

      async function getAccountId(id){
        return await accountcontroller.findAccountId(id);

      }

      passport.serializeUser((user, done) => {
        
        console.log("veio ate aque")
        done(null, user.id);

      });

      passport.deserializeUser( async (id, done) => {

        try{
          
          console.log("veio aque 5")
          const user = await getAccountId(id);
          done(null, user);

        }catch(erro){
          return done(erro, null)
        }

      });

      passport.use(new localStrategy({

        usernameField: 'login',
        passwordField: 'senha'

      }, async (login, senha, done) =>{

        try{

          const user = await getAccount(login);
          if(!user)return done(null, false);

          const isValid = bcrypt.compareSync(senha, user.senha);
          if(!isValid) return done(null, false);


          return done(null, user);

        }catch(erro){

          return done(erro, false)

        }
      }))

}

