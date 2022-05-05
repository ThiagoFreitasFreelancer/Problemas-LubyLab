const { request, response } = require("express");
const express =  require(`express`);
const  db = require("./src/Database/Db.ts");

const app = express();

db.sync();

app.use(express.json());

const { v4: uuidv4 } = require(`uuid`);

const customers = []

// Middleware recebe 3 parametros


// function getBalance(statement){
//     const balance = statement.reduce((acc, operation) => {
//         if(operation.type === 'credit'){
//             return acc + operation.amount;
//         }else{
//             return acc - operation.amount;
//         }
//     }, 0);

//     return balance;
// }

/**
 * cpf - string
 * name - string
 * id - uuid
 * stantemant []
 */


//app.use(veryfyUfExistsAccountCPF)

// app.get("/statement", verifyIfExistsAccountCPF, (request, response) => {
    
//     const { customer } = request;

//     return response.json(customer.statement);

// });

// app.post("/deposit", verifyIfExistsAccountCPF, (request, response) => {

//     const { description, amount } = request.body;

//     const { customer } = request;

//     const statementOperation = {

//         description,
//         amount,
//         created_at: new Date(),
//         type: "credit"

//     }

//     customer.statement.push(statementOperation);

//     return response.status(201).send();

// });

// app.post("/withdraw", verifyIfExistsAccountCPF, (request, response) => {

//     const { amount } = request.body;

//     const { customer } = request;

//     const balance = getBalance(customer.statement);

//     if(balance < amount){

//         return response.status(400).json({ erro : "INSUFFICIENT FUNDS" })        

//     } 

//     const statementOperation = {

//         amount,
//         created_at: new Date(),
//         type: "debit"

//     }

//     customer.statement.push(statementOperation);

//     return response.status(201).send();
// });

// app.get("/statement/date", verifyIfExistsAccountCPF, (request, response) => {
    
//     const { customer } = request;
//     const { date } = request.query;

//     const dateFormat = new Date( date + " 00:00" );

//     const statement = customer.statement.filter((statement) => statement.created_at.toDateString() === 
//     new Date(dateFormat).toDateString() )

//     return response.json(customer.statement);

// });

// app.put("/account", verifyIfExistsAccountCPF, (request, response) => {

//     const { name } = request.body;

//     const { customer } = request;

//     customer.name = name;

//     return response.status(201).send();

// });

// app.get("/account", verifyIfExistsAccountCPF, (request, response) => {

//     const { customer } = request;

//     return response.json(customer);
// });



// app.get("/balance", verifyIfExistsAccountCPF, (request, response) => {

//     const { customer } = request;

//     const balance = getBalance(customer.statement);

//     return response.json(balance);

// });

app.listen(3333);