import { accountRepository } from "../Modules/Repositories/account.repository";


class accountCrontroller{

    async findAll(req, res){
        const account = await accountModel.findAll();
        res.json(account);
    }

    findAccount(req, res) {
        accountModel.findByPk(req.params.id).then((result) => res.json(result));
    }
      
    addAccount(req, res) {
        accountModel.create({
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
            cpf: req.body.cpf,
            avatar: req.body.avatar,
            tipoConta: req.body.tipoConta,
            veiculo: req.body.veiculo,
        }).then((result) => res.json(result));
    }
      
    async updateAccount(req, res) {
        await accountModel.update(
          {
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
            cpf: req.body.cpf,
            avatar: req.body.avatar,
            tipoConta: req.body.tipoConta,
            veiculo: req.body.veiculo,
          },
          {
            where: {
              id: req.params.id,
            },
          }
        );
      
        accountModel.findByPk(req.params.id).then((result) => res.json(result));
      }
      
    async deleteAccount(req, res) {
        await accountModel.destroy({
          where: {
            id: req.params.id,
          },
        });
      
        accountModel.findAll().then((result) => res.json(result));
    }

}

export { accountCrontroller }