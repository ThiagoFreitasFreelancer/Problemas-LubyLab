const { Router } = require("express");
const accountController = require("../Controller/account.controller"); 

const controler = new accountController()
const rota = Router();

function verifyIfExistsAccountCPF(request, response, next){

    const { cpf } = request.headers;

    const customer = accountController.find( accounts => accounts.cpf === cpf );
   
    if(!customer){
        return response.status(400).json({ error: "Erro customer not found"});
    }

}
rota.post("/account", (request, response) => {

    const account = request.body;
    const customer = controler.findAccount(account.id);
   
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

rota.get("/account", (request, response) => {

    const accountAll = controler.findAll();

    return response.json(accountAll);
});

rota.delete("/account", verifyIfExistsAccountCPF, (request, response) => {

    const { cpf } = request;

    controler.delete(cpf);

    return response.status(200).json(customers);

});

module.exports = rota