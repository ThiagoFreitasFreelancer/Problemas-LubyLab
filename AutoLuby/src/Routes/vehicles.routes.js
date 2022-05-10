const { Router } = require("express");
const vehicleController = require("../Controller/vehicle.controller");
const VehiclesController = require("../Controller/vehicle.controller");

const vehiclescontroller = new VehiclesController()

const rota = Router()

//OK
async function verifyIfExistsVehicleId(request, response, next){

    const { chassi } = request.headers;

    try{
        const result = await vehiclescontroller.findVehicle(chassi);
        if(!result){
            return response.status(500).json({"erro" : "Not Found"})
        }        
        return next();

    }catch(erro){

        return response.status(400).json({ "error": erro.message});
    }    

}
//OK
rota.post("/vehicle", async (request, response) => {

    const newVehicle = request.body;
    
    try{
        await vehiclescontroller.addVehicle(newVehicle);
        return response.status(201).send()
    }
    catch(erro){
        return response.status(501).json({"erro" : erro.message})  
    }    

});


rota.put("/vehicle", verifyIfExistsVehicleId, async (request, response) => {
    
    const vehicle = request.body;

    const  newVehicle = await vehiclescontroller.updateVehicle(vehicle);

    return response.status(201).json({newVehicle});

});

//OK
rota.get("/vehicle", async (request, response) => {

    try{
        const result = await vehiclescontroller.findAll()
        return response.status(201).json({result})

    }catch(erro){
        return response.status(500).json({"erro" : erro.message})
    }
    
});

//OK
rota.get("/vehicle/one", verifyIfExistsVehicleId, async (request, response) => {

    const { chassi } = request.headers

    try{

        const result = await vehiclescontroller.findVehicle(chassi)
        return response.status(201).json({result})

    }catch(erro){

        return response.status(500).json({"erro" : erro.message})
    }
    
});


rota.delete("/vehicle", verifyIfExistsVehicleId, async (request, response) => {

    const { chassi } = request.headers;
    try{

        await vehiclescontroller.deleteVehicle(chassi);
        return response.status(200).json({"Sucess": "foi"});

    }catch(erro){
       
        return response.status(500).json({"erro" : erro.message});

    }
       

});

rota.get("/vehicle/status", async (request, response) =>{

    const { status } = request.body;

    try{

        const all = await vehiclescontroller.findVehicleStatus(status)
        return response.status(200).json({"result": all});

    }catch(erro){
        return response.status(500).json({"erro" : erro.message})
    }

})

module.exports = rota