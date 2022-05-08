import { vehicleRepository } from "../Modules/Repositories/vehicle.repository";

class vehicleController{
    async findAll(){
        return vehicleRepository.findAll();
    }
  
    findVehicle(name) {
        return vehicleRepository.findVehicle(name);
    }
        
    addvehicle(vehicle) {
        return vehicleRepository.addvehicle(vehicle);
    }
        
    async updateVehicle(id) {
        return vehicleRepository.updateVehicle(id);
    }
        
    async deleteVehicle(id) {
        return vehicleRepository.deleteVehicle(id);
    }
}

export { vehicleController }