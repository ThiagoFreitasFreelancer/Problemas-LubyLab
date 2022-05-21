const { VehicleBuy } = require("../../Database/models");
const { Vehicle } = require("../../Database/models");

class vehicleBuyRepository{

  async findAll(limit = 10, base = 0){
    return await VehicleBuy.findAll({
      limit: limit,
      offset: base
    });
  }

  async findVehicle(chassi){

    return await Vehicle.findOne({
      where:{
        chassi : chassi
      }
    })
  }

  async findVehicleBuy(chassiVeiculo) {
    return await VehicleBuy.findOne({ 
      where:{
        chassiVeiculo : chassiVeiculo
      }
     });
  }

  async findVehicleBuyCpf(cpf) {
    return await VehicleBuy.findOne({ 
      where:{
        vendedorCpf : cpf
      }
     });
  }
    
  async addvehicleBuy(vehicleBuy, vehicle) {
    
    const {

      precoVenda,
      vendedorCpf,
      chassiVeiculo,
      statusVeiculo,

    } = vehicleBuy

    let data = new Date();

    await Vehicle.update(
      {
        status: statusVeiculo,
        vendedorCpf: vendedorCpf
      },
      {
        where: {
            chassi: vehicle.chassi,
        },
    })

    return await VehicleBuy.create({
      precoVenda : precoVenda,
      vendedorCpf: vendedorCpf,
      data: data,
      chassiVeiculo: chassiVeiculo,
      statusVeiculo: statusVeiculo,
    });
  }
    
  async deleteVehicleBuy(id) {

    await VehicleBuy.destroy({
      where: {
        id : id,
      },
    });

  }
}

module.exports = vehicleBuyRepository