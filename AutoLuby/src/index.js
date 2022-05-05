const { Routes } = require("express");

const { v4: uuidv4 } = require(`uuid`);

const customers = []

// Middleware recebe 3 parametros

function verifyIfExistsAccountCPF(request, response, next){

    const { cpf } = request.headers;

    const customer = customers.find( customers => customers.cpf === cpf );
   
    if(!customer){
        return response.status(400).json({ error: "Erro customer not found"});
    }

    request.customer = customer;

    return next();

}

function getBalance(statement){
    const balance = statement.reduce((acc, operation) => {
        if(operation.type === 'credit'){
            return acc + operation.amount;
        }else{
            return acc - operation.amount;
        }
    }, 0);

    return balance;
}

/**
 * cpf - string
 * name - string
 * id - uuid
 * stantemant []
 */
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

//app.use(veryfyUfExistsAccountCPF)

Routes.get("/statement", verifyIfExistsAccountCPF, (request, response) => {
    
    const { customer } = request;

    return response.json(customer.statement);

});

Routes.post("/deposit", verifyIfExistsAccountCPF, (request, response) => {

    const { description, amount } = request.body;

    const { customer } = request;

    const statementOperation = {

        description,
        amount,
        created_at: new Date(),
        type: "credit"

    }

    customer.statement.push(statementOperation);

    return response.status(201).send();

});

Routes.post("/withdraw", verifyIfExistsAccountCPF, (request, response) => {

    const { amount } = request.body;

    const { customer } = request;

    const balance = getBalance(customer.statement);

    if(balance < amount){

        return response.status(400).json({ erro : "INSUFFICIENT FUNDS" })        

    } 

    const statementOperation = {

        amount,
        created_at: new Date(),
        type: "debit"

    }

    customer.statement.push(statementOperation);

    return response.status(201).send();
});

Routes.get("/statement/date", verifyIfExistsAccountCPF, (request, response) => {
    
    const { customer } = request;
    const { date } = request.query;

    const dateFormat = new Date( date + " 00:00" );

    const statement = customer.statement.filter((statement) => statement.created_at.toDateString() === 
    new Date(dateFormat).toDateString() )

    return response.json(customer.statement);

});

Routes.put("/account", verifyIfExistsAccountCPF, (request, response) => {

    const { name } = request.body;

    const { customer } = request;

    customer.name = name;

    return response.status(201).send();

});

Routes.get("/account", verifyIfExistsAccountCPF, (request, response) => {

    const { customer } = request;

    return response.json(customer);
});

Routes.delete("/account", verifyIfExistsAccountCPF, (request, response) => {

    const { customer } = request;

    customers.splice(customer, 1);

    return response.status(200).json(customers);

});

Routes.get("/balance", verifyIfExistsAccountCPF, (request, response) => {

    const { customer } = request;

    const balance = getBalance(customer.statement);

    return response.json(balance);

});

