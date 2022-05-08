const accountModel = require("../Model/account");
class accountRepository{

    async findAll(){
      return account = await accountModel.findAll();
    }

    findAccount(cpf) {
      return accountModel.findByPk(element => element.cpf == cpf).then();
    }
      
    addAccount(account) {

      const { nome, email, senha, cpf, avatar, tipoConta, veiculo, biografia } = account;

      return accountModel.create(
        nome,
        email,
        senha,
        cpf,
        avatar,
        tipoConta,
        veiculo,
        biografia
      )
    }
      
    async updateAccount(account) {

      const { nome, email, senha, cpf, avatar, tipoConta, veiculo, id } = account;
      await accountModel.update(
        {
          nome,
          email,
          senha,
          cpf,
          avatar,
          tipoConta,
          veiculo,
        },
        {
          where: {
            id,
          },
        }
      );
    
      return accountModel.findByPk(id).then();
    }
      
    async deleteAccount(cpf) {
        await accountModel.destroy({
          where: {
            cpf
          },
        });
      
        return accountModel.findAll().then();
    }
}

module.exports = accountRepository