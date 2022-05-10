const vehicleModel = require("../Model/vehicle");

class vehicleRepository{

  async findAll(){
    return await vehicleModel.findAll();
  }

  async findVehicle(vehicle_id) {
    return await vehicleModel.findByPk(vehicle_id);
  }
    
  async addvehicle(vehicle) {

    if(!vehicle){
      return {"erro": 'erro'};
    }
    
    const { nome, preco, tipoVeiculo, descrisao, chassi, marca, modelo, km, ano } = vehicle

    return await vehicleModel.create({
          nome,
          preco,
          tipoVeiculo,
          descrisao,
      }).then();
  }
    
  async updateVehicle(vehicle) {

    if(!vehicle){
      return {"erro": 'erro'};
    }

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
  
    return await vehicleModel.findByPk(vehicle_id);
  }
    
  async deleteVehicle(vehicle_id) {
    await vehicleModel.destroy({
      where: {
        vehicle_id,
      },
    });
  }
}

module.exports = vehicleRepository