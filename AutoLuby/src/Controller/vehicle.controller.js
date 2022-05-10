const vehicleRepository = require("../Modules/Repositories/vehicle.repository");

const vehicleRespo = new vehicleRepository();

class vehicleController{
    async findAll(){
        return await vehicleRespo.findAll();
    }
  
    async findVehicle(vehicle_id) {
        return await vehicleRespo.findVehicle(vehicle_id);
    }
        
    async addvehicle(vehicle) {
        return await vehicleRespo.addvehicle(vehicle);
    }
        
    async updateVehicle(vehicle) {
        return await vehicleRespo.updateVehicle(vehicle);
    }
        
    async deleteVehicle(id) {
        return vehicleRespo.deleteVehicle(id);
    }
}

module.exports = vehicleController