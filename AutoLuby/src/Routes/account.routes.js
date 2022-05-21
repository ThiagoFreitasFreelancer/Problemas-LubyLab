const { Router } = require("express");
const AccountController = require("../Controller/account.controller"); 
const VehiclesBuyController = require('../Controller/vehicleBuy.controller')

const controler = new AccountController()
const vehicleBuyController = new VehiclesBuyController()
const rota = Router();

//OK
async function verifyIfExistsAccountCPF(request, response, next){

    const { cpf } = request.headers;
       
    try{        
        const result = await controler.findAccount(cpf);

        if(!result){
            return response.status(500).json({"erro" : "Not Found"});
        }

        return next()

    }catch(erro){
        const  { errors  } = erro
        return response.status(500).json({"erro" : erro})
    }   

}

async function verifyIfExistsVheicle(request, response, next){

    const { chassiVeiculo } = request.body;
       
    try{        
        const vehicle = await vehicleBuyController.findVehicle(chassiVeiculo);

        if(!vehicle &&
            vehicle.status.toLowerCase() != 'reservado'&&
            vehicle.status.toLowerCase() != 'vendido'){

            return response.status(500).json({"erro" : "Not Found Vehicle"});
        }

        request.body.vehicle = vehicle

        return next()

    }catch(erro){
        const  { errors  } = erro
        return response.status(500).json({"erro" : erro})
    }   

}
//OK
rota.post("/account", async (request, response) => {

    const account = request.body;
    try{        
        const result = await controler.addAccount(account);
        return response.status(201).send()

    }catch(erro){
        const  { errors  } = erro
        return response.status(500).json({"erro" : errors[0].message})
    }

});

//OK
rota.put("/account", verifyIfExistsAccountCPF, async (request, response) => {
    
    const thisAccount = request.body;

    try{

        const  newAccount = await controler.updateAccount(thisAccount);
        return response.status(201).json({newAccount})

    }catch(erro){
        
        const  { errors  } = erro
        return response.status(500).json({"erro" : errors[0].message})
    }

});

//OK
rota.get("/account", async (request, response) => {

    try{

        const result = await controler.findAll()
        return response.status(201).json({result})

    }catch(erro){
        const  { errors  } = erro
        return response.status(500).json({"erro" : errors[0].message})
    }
});

rota.get("/account/vendas", async (request, response) => {

    const  { cpf } = request.body

    try{

        const result = await controler.findAccontVendas(cpf)
        return response.status(201).json({
            "vendedor" : result.accountData,
            "vendas": result.vendasData
        })

    }catch(erro){
        const  { errors  } = erro
        return response.status(500).json({"erro" : erro})
    }
});

rota.get("/account/one", verifyIfExistsAccountCPF, async (request, response) => {

    const { cpf } = request.headers;

    try{
        
        const result = await controler.findAccount(cpf)
        return response.status(201).json({result})

    }catch(erro){

        const  { errors  } = erro
        return response.status(500).json({"erro" : erro})
    }
});

//OK
rota.delete("/account", verifyIfExistsAccountCPF, async (request, response) => {

    const { cpf } = request.headers;
    
    try{
        
        await controler.deleteAccount(cpf);
        return response.status(201).json()

    }catch(erro){

        const  { errors  } = erro
        return response.status(500).json({"erro" : erro}) 
    }

});

rota.post('/account/vehiclereserva', verifyIfExistsVheicle, verifyIfExistsAccountCPF, 
async (request, response) => {

    const vehicleBuy = request.body
    const { vehicle } = request.body

    try{
        if(vehicleBuy.statusVeiculo.toLowerCase() != "reservado"){
            return response.status(500).json({ "erro" : "Statos Incorreto"})
        }
        await vehicleBuyController.addvehicleBuy(vehicleBuy, vehicle);
        return response.status(201).send()

    }catch(erro){
        const  { errors  } = erro
        return response.status(500).json({"erro" : erro})

    }
})

rota.post('/account/vehiclersale', verifyIfExistsVheicle, verifyIfExistsAccountCPF, 
async (request, response) => {

    const vehicleBuy = request.body
    const { vehicle } = request.body

    try{
        
        if(vehicleBuy.statusVeiculo.toLowerCase() != "vendido"){
            return response.status(500).json({ "erro" : "Statos Incorreto"})
        }
        await vehicleBuyController.addvehicleBuy(vehicleBuy, vehicle);
        return response.status(201).send()

    }catch(erro){
        const  { errors  } = erro
        return response.status(500).json({"erro" : erro})

    }
});

module.exports = rota