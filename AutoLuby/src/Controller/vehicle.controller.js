const vehicleRepository = require("../Modules/Repositories/vehicle.repository");

const vehicleRespo = new vehicleRepository();

class vehicleController{

    async findAll(limit, base){
        return await vehicleRespo.findAll(limit, base);
    }
  
    async findVehicle(vehicleChassi) {
        return await vehicleRespo.findVehicle(vehicleChassi);
    }
        
    async addVehicle(vehicleChassi) {
        return await vehicleRespo.addvehicle(vehicleChassi);
    }
        
    async updateVehicle(vehicle) {
        return await vehicleRespo.updateVehicle(vehicle);
    }
        
    async deleteVehicle(chassi) {
        return vehicleRespo.deleteVehicle(chassi);
    }

    async findVehicleStatus(status){
        return await vehicleRespo.findVehicleStatus(status)
      }
}

module.exports = vehicleController