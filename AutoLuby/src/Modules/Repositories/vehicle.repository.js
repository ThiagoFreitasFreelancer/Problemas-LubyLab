const { Vehicle } = require("../../Database/models");

class vehicleRepository{

  async findAll(limit = 10, base = 0){
    return await Vehicle.findAll({
      limit: limit,
      offset: base
    });
  }

  async findVehicle(chassi) {
    return await Vehicle.findOne({ 
      where:{
        chassi : chassi
      }
     });
  }

  async findVehicleStatus(status) {
    return await Vehicle.findAll({ 
      where:{
        status : status
      }
     });
  }
    
  async addvehicle(vehicle) {
    
    const { 
      nome,
      preco,
      tipoVeiculo,
      descrisao,
      chassi,
      marca,
      modelo,
      km,
      ano,
      status
    } = vehicle

    return await Vehicle.create({
          nome,
          preco,
          tipoVeiculo,
          descrisao,
          chassi, 
          marca, 
          modelo, 
          km, 
          ano,
          status
      }).then();
  }
    
  async updateVehicle(vehicle) {

    await Vehicle.update(
      {
        nome: vehicle.nome ? vehicle.nome : this.nome,
        preco: vehicle.preco ? vehicle.preco : this.preco,
        tipoVeiculo: vehicle.tipoVeiculo ? vehicle.tipoVeiculo : this.tipoVeiculo,
        descrisao: vehicle.descrisao ? vehicle.descrisao : this.descrisao,
      },
      {
        where: {
            vehicle_id,
        },
      }
    );
  
    return await Vehicle.findOne({
      where:{
        vehicle_id : vehicle_id
      }
    });
  }
    
  async deleteVehicle(chassi) {

    await Vehicle.destroy({
      where: {
        chassi: chassi,
      },
    });

  }
}

module.exports = vehicleRepository