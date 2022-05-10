const { Router } = require("express");
import VehiclesController from "../Controller/vehicle.controller"

const vehiclescontroller = new VehiclesController()

const rota = Router()

function verifyIfExistsVehicleId(request, response, next){

    const { vehicle_id } = request.body;

    const vehicleExists = vehiclescontroller.findVehicle(vehicle_id);
   
    if(!vehicleExists){
        return response.status(400).json({ error: "Erro vehicle not found"});
    }

    return next();

}

rota.post("/vehicle", async (request, response) => {

    const newVehicle = request.body;
    
    const result = await controler.addAccount(newVehicle);

    if(!result){
        return response.status(501).send()    
    }

    return response.status(201).send()

});

//OK
rota.put("/vehicle", verifyIfExistsVehicleId, async (request, response) => {
    
    const vehicle = request.body;

    const  newVehicle = await controler.updateAccount(vehicle);

    return response.status(201).json({newVehicle});

});

//OK
rota.get("/vehicle", async (request, response) => {

    const result = await controler.findAll()

    if(!result){
        return response.status(500).json({"erro" : "erro"})
    }
    return response.status(201).json({result})
    
});

//OK
rota.delete("/vehicle", async (request, response) => {

    const { chassis } = request.body;  

    const result = await controler.deleteAccount(chassis);
    
    if(!result){
        return response.status(500).json({"erro" : "erro"});
    } 
    return response.status(200);

});

module.exports = rota