const express = require("express");

const app = express();

function verifyIfExistsAccountCPF(request, response, next){

    const { cpf } = request.headers;

    const customer = account.find( accounts => accounts.cpf === cpf );
   
    if(!customer){
        return response.status(400).json({ error: "Erro customer not found"});
    }

}

app.get("/", (request, response) => {
    response.send("Minha rola")
})

app.post("/account", (request, response) => {

    console.log("entro")
    const thisAccount = request.body;

    const customer = account.find( accounts => accounts.cpf === cpf );
   
    if(!customer){
        return response.status(400).json({ error: "Erro customer not found"});
    }

    account.addAccount(thisAccount);

    return response.status(201).send()

});

app.put("/account", verifyIfExistsAccountCPF, (request, response) => {

    const thisAccount = request.body;

    const customer = account.find( accounts => accounts.cpf === cpf );
   
    if(!customer){
        return response.status(400).json({ error: "Erro customer not found"});
    }

    account.updateAccount(thisAccount);

    return response.status(201).send();

});

app.get("/account", (request, response) => {

    const accountAll = account.findAll();

    return response.json(accountAll);
});

app.delete("/account", verifyIfExistsAccountCPF, (request, response) => {

    const { cpf } = request;

    account.delete(cpf);

    return response.status(200).json(customers);

});