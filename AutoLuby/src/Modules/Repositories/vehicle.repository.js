import vehicleModel from "../Modules/Repositories/vehicle.repository";

class vehicleRepository{

    async findAll(req, res){
        const vehicle = await vehicleModel.findAll();
        res.json(vehicle);
    }

    findVehicle(req, res) {
        vehicleModel.findByPk(req.params.name).then((result) => res.json(result));
    }
      
    addvehicle(req, res) {
        vehicleModel.create({
            nome: req.body.nome,
            preco: req.body.preco,
            tipoVeiculo: req.body.tipoVeiculo,
            descrisao: req.body.descrisao,
        }).then((result) => res.json(result));
    }
      
    async updateVehicle(req, res) {
        await vehicleModel.update(
          {
            nome: req.body.nome,
            preco: req.body.preco,
            tipoVeiculo: req.body.tipoVeiculo,
            descrisao: req.body.descrisao,
          },
          {
            where: {
                vehicle_id: req.params.id,
            },
          }
        );
      
        vehicleModel.findByPk(req.params.id).then((result) => res.json(result));
      }
      
    async deleteVehicle(req, res) {
        await vehicleModel.destroy({
          where: {
            vehicle_id: req.params.id,
          },
        });
      
        vehicleModel.findAll().then((result) => res.json(result));
    }
}

export { vehicleRepository }