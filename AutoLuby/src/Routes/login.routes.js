const { Router } = require("express")
const passport = require('passport')
const CustomStrategy = require('../Modules/Authentication/auth')

const router = Router();

router.post('/login', passport.authenticate('local', {

    successRedirect: '/',
    failureRedirect: '/?fail=true' //Somente para teste

}));

router.get('/', (request, response, next) => {

    if(request.query.fail){

        response.json({"Login Fail": "Usuzario/Senha Invalido"});

    }else{
        
        response.json({ "Logado" : 'True' })
    }

});

module.exports = router;