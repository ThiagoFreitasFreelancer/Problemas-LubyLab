const vehicleRepository = require("../Modules/Repositories/vehicleBuy.repository");

const vehicleRespo = new vehicleRepository();

class vehicleBuyController{

    async findAll(limit, base){
        return await vehicleRespo.findAll(limit, base);
    }
    
    async findVehicle(chassi) {
        return await vehicleRespo.findVehicle(chassi);
    }

    async findVehicleBuy(id) {
        return await vehicleRespo.findVehicleBuy(id);
    }
        
    async addvehicleBuy(vehicleBuy, vehicle) {
        return await vehicleRespo.addvehicleBuy(vehicleBuy, vehicle);
    }
        
    async deleteVehicleBuy(id) {
        return vehicleRespo.deleteVehicleBuy(id);
    }
}

module.exports = vehicleBuyController