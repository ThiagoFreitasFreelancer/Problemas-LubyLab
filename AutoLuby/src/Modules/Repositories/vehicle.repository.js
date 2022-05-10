const vehicleModel = require("../Model/vehicle");

class vehicleRepository{

  async findAll(limit = 10, base = 0){
    return await vehicleModel.findAll({
      limit: limit,
      offset: base
    });
  }

  async findVehicle(chassi) {
    return await vehicleModel.findOne({ 
      where:{
        chassi : chassi
      }
     });
  }

  async findVehicleStatus(status) {
    return await vehicleModel.findAll({ 
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

    return await vehicleModel.create({
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

    await vehicleModel.update(
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
  
    return await vehicleModel.findOne({
      where:{
        vehicle_id : vehicle_id
      }
    });
  }
    
  async deleteVehicle(chassi) {

    await vehicleModel.destroy({
      where: {
        chassi: chassi,
      },
    });

  }
}

module.exports = vehicleRepository