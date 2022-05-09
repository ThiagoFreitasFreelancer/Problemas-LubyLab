const { Router } = require("express");
const AccountController = require("../Controller/account.controller"); 

const controler = new AccountController()
const rota = Router();

function verifyIfExistsAccountCPF(request, response, next){

    const { cpf } = request.headers;

    const account = controler.findAccount(request.body);

    console.log(account)
   
    if(!account){
        return response.status(400).json({ error: "Erro customer not found"});
    }

}
//OK
rota.post("/account", (request, response) => {

    const account = request.body;
    const customer = controler.findAccount(account);
   
    if(!customer){
        return response.status(400).json({ error: "Erro account awere existis"});
    }
    
    const result = controler.addAccount(account);
    if(!result){
        return response.status(501).send()    
    }

    return response.status(201).send()

});

rota.put("/account", verifyIfExistsAccountCPF, (request, response) => {
    const thisAccount = request.body;

    const customer = controler.find( accounts => accounts.cpf === cpf );
   
    if(!customer){
        return response.status(400).json({ error: "Erro customer not found"});
    }

    controler.updateAccount(thisAccount);

    return response.status(201).send();

});

//OK
rota.get("/account", (request, response) => {

    controler.findAll(response)
});

rota.delete("/account", (request, response) => {

    const { cpf } = request.body;

    console.log(cpf)

    const result = controler.deleteAccount(cpf, response);

    //return response.status(200).json({result});

});

module.exports = rota