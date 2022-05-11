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
        chassi: chassi
      }
    })
  }

  async findVehicleBuy(id) {
    return await VehicleBuy.findOne({ 
      where:{
        vehicle_Id : id
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
    
    let dataFormatada = ((data.getDate() )) + "/" + 
    ((data.getMonth() + 1)) + "/" + 
    data.getFullYear();

    await Vehicle.updateVehicle(vehicle);

    return await VehicleBuy.create({
      precoVenda,
      vendedorCpf,
      data: dataFormatada,
      chassiVeiculo,
      statusVeiculo,
    }).then();
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