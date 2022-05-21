const { Router } = require("express")
const passport = require('passport')
const CustomStrategy = require('../Modules/Authentication/auth')

const router = Router();

router.post('/login', passport.authenticate('local', {

    successRedirect: '/',
    failureRedirect: '/?fail=true'

}));

router.get('/', (request, response, next) => {

    if(request.query.fail){

        response.json({"Login Fail": "Usuzario/Senha Invalido"});

    }else{
        
        console.log("Entrou aque")
        response.json({ "Logado" : 'True' })
    }

});

module.exports = router;