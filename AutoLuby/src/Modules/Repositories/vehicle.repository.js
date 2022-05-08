const vehicleModel = require("../Model/vehicle");

class vehicleRepository{

    async findAll(){
      return await vehicleModel.findAll();
    }

    findVehicle(name) {
      return vehicleModel.findByPk(name).then();
    }
      
    addvehicle(vehicle) {

      const { nome, preco, tipoVeiculo, descrisao } = vehicle

      return vehicleModel.create({
            nome,
            preco,
            tipoVeiculo,
            descrisao,
        }).then();
    }
      
    async updateVehicle(vehicle) {

      const { nome, preco, tipoVeiculo, descrisao, vehicle_id } = vehicle

      await vehicleModel.update(
        {
          nome,
          preco,
          tipoVeiculo,
          descrisao,
        },
        {
          where: {
              vehicle_id,
          },
        }
      );
    
      return vehicleModel.findByPk(id).then();
    }
      
    async deleteVehicle(vehicle_id) {
        await vehicleModel.destroy({
          where: {
            vehicle_id,
          },
        });
      
        return vehicleModel.findAll().then();
    }
}

module.exports = vehicleRepository