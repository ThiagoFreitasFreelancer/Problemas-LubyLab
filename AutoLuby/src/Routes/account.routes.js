const { Router } = require("express");
const AccountController = require("../Controller/account.controller"); 

const controler = new AccountController()
const rota = Router();

//OK
async function verifyIfExistsAccountCPF(request, response, next){

    const { cpf } = request.headers;
       
    try{        
        const result = await controler.findAccount(cpf);

        if(!result){
            return response.status(500).json({"erro" : "Not Found"})
        }

        return next()

    }catch(erro){
        return response.status(500).json({"erro" : erro.message})
    }   

}
//OK
rota.post("/account", async (request, response) => {

    const account = request.body;
    
    try{        
        const result = await controler.addAccount(account);
        return response.status(201).send()

    }catch(erro){
        const { message } = erro
        return response.status(500).json({"erro" : message})
    }

});

//OK
rota.put("/account", verifyIfExistsAccountCPF, async (request, response) => {
    
    const thisAccount = request.body;

    try{

        const  newAccount = await controler.updateAccount(thisAccount);
        return response.status(201).json({newAccount})

    }catch(erro){
        
        const { message } = erro
        return response.status(500).json({ "erro" : message})
    }

});

//OK
rota.get("/account", async (request, response) => {

    try{

        const result = await controler.findAll()
        return response.status(201).json({result})

    }catch(erro){

        const { message } = erro
        return response.status(500).json({ "erro" : message})
    }
});

rota.get("/account/one", verifyIfExistsAccountCPF, async (request, response) => {

    const { cpf } = request.headers;

    try{
        
        const result = await controler.findAccount(cpf)
        return response.status(201).json({result})

    }catch(erro){

        const { message } = erro
        return response.status(500).json({ "erro" : message})
    }
});

//OK
rota.delete("/account", verifyIfExistsAccountCPF, async (request, response) => {

    const { cpf } = request.headers;
    
    try{
        
        await controler.deleteAccount(cpf);
        return response.status(201).json()

    }catch(erro){

        const { message } = erro
        return response.status(500).json({ "erro" : message})   
    }

});

rota.post('/account/buyvehicle', verifyIfExistsAccountCPF, (request, response) => {

})

rota.get('/account/vehicle', verifyIfExistsAccountCPF, (request, response) => {
    
})

rota.delete('/account/salevehicle', verifyIfExistsAccountCPF, (request, response) => {
    
})

module.exports = rota