const { express } = require("express");
import account from "../Controller/account.controller"

const Routes = express()
const customers = []

function verifyIfExistsAccountCPF(request, response, next){

    const { cpf } = request.headers;

    const customer = customers.find( customers => customers.cpf === cpf );
   
    if(!customer){
        return response.status(400).json({ error: "Erro customer not found"});
    }

    request.customer = customer;

    return next();

}

Routes.post("/account", (request, response) => {

    const {cpf, name} = request.body;

    const customersAlreadyExists = customers.some(
        (customer) => customer.cpf === cpf
    );
    
    if(customersAlreadyExists){
        return response.status(400).json({error: `Customer already exists!`})
    }

    customers.push({
        cpf,
        name,
        id: uuidv4(),
        statement : [],
    });

   return response.status(201).send()

});

Routes.put("/account", verifyIfExistsAccountCPF, (request, response) => {

    const { name } = request.body;

    const { customer } = request;

    customer.name = name;

    return response.status(201).send();

});

Routes.get("/account", (request, response) => {

    const accountAll = account.findAll();

    return response.json(accountAll);
});

Routes.delete("/account", verifyIfExistsAccountCPF, (request, response) => {

    const { customer } = request;

    customers.splice(customer, 1);

    return response.status(200).json(customers);

});