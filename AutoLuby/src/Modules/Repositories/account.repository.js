import accountModel from "../Model/account";

class accountRepository{

    async findAll(){
        const account = await accountModel.findAll();
        return account;
    }

    findAccount(id) {
        return accountModel.findByPk(id).then();
    }
      
    addAccount(req) {
        return accountModel.create({
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
            cpf: req.body.cpf,
            avatar: req.body.avatar,
            tipoConta: req.body.tipoConta,
            veiculo: req.body.veiculo,
        }).then();
    }
      
    async updateAccount(req) {
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
      
        return accountModel.findByPk(req.params.id).then((result));
      }
      
    async deleteAccount(id) {
        await accountModel.destroy({
          where: {
            id: id,
          },
        });
      
        return accountModel.findAll().then();
    }
}

export { accountRepository }