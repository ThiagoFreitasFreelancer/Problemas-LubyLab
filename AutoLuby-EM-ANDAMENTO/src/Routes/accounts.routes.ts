import account from "../Controllers/account.controller"
import express from "express";

const app = express.Router();

function verifyIfExistsAccountCPF(request, response, next){

    // const { cpf } = request.headers;

    // const customer = customers.find( customers => customers.cpf === cpf );
   
    // if(!customer){
    //     return response.status(400).json({ error: "Erro customer not found"});
    // }

    // request.customer = customer;

    return next();

}

app.get("/clients", account.findAll);

app.delete("/account", verifyIfExistsAccountCPF, (request, response) => {

    const { customer } = request;

    //customers.splice(customer, 1);

    //return response.status(200).json(customers);

});

app.post("/account", (request, response) => {

    const {cpf, name} = request.body;

    // const customersAlreadyExists = customers.some(
    //     (customer) => customer.cpf === cpf
    // );
    
    // if(customersAlreadyExists){
    //     return response.status(400).json({error: `Customer already exists!`})
    // }

    // customers.push({
    //     cpf,
    //     name,
    //     id: uuidv4(),
    //     statement : [],
    // });

   return response.status(201).send()

});