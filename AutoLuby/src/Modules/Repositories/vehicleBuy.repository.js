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
    
  async addvehicleBuy(vehicleBuy) {
    
    const {
        precoVenda,
        statusVeiculo,
        account_Id,
        vehicle_Id

    } = vehicleBuy

    let data = new Date();
    
    let dataFormatada = ((data.getDate() )) + "/" + 
    ((data.getMonth() + 1)) + "/" + 
    data.getFullYear();

    return await VehicleBuy.create({
        precoVenda,
        data : dataFormatada,
        statusVeiculo,
        account_Id,
        vehicle_Id
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