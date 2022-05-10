const { Router } = require("express");
const AccountController = require("../Controller/account.controller"); 

const controler = new AccountController()
const rota = Router();

//OK
async function verifyIfExistsAccountCPF(request, response, next){

    const { id } = request.body;

    const account = await controler.findAccount(id);
       
    if(!account){
        return response.status(400).json({ error: "Erro customer not found"});
    }

    return next()

}
//OK
rota.post("/account", async (request, response) => {

    const account = request.body;
    
    const result = await controler.addAccount(account);
    if(!result){
        return response.status(501).send()    
    }

    return response.status(201).send()

});

//OK
rota.put("/account", verifyIfExistsAccountCPF, async (request, response) => {
    
    const thisAccount = request.body;

    const  newAccount = await controler.updateAccount(thisAccount);

    return response.status(201).json({newAccount});

});

//OK
rota.get("/account", async (request, response) => {

    const result = await controler.findAll()

    if(result){
        return response.status(201).json({result})
    }
    return response.status(500).json({result})
});

//OK
rota.delete("/account", async (request, response) => {

    const { cpf } = request.body;  

    const result = await controler.deleteAccount(cpf, response);
    
    if(result){
        return response.status(200);
    }
    return response.status(500).json({"erro" : "erro"});
    

});

rota.post('/account/buyvehicle', verifyIfExistsAccountCPF, (request, response) => {

})

rota.get('/account/vehicle', verifyIfExistsAccountCPF, (request, response) => {
    
})

rota.delete('/account/salevehicle', verifyIfExistsAccountCPF, (request, response) => {
    
})

module.exports = rota