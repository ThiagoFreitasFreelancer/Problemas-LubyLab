const accountModel = require("../Model/account");
class accountRepository{

  constructor(){
    this.findAccount()
    this.findAll()
    this.addAccount()
    this.updateAccount()
    this.deleteAccount()
  }

    async findAll(){
      const all = await accountModel.findAll();
      return all
    }

    findAccount(id) {
      return accountModel.findByPk(id);
    }
      
    async addAccount(account) {

      if(!account){
        return "erro";
      }

      const { nome, email, senha, cpf, avatar, tipoConta, veiculo, biografia } = account;

      return await accountModel.create({
        nome: nome,
        email,
        senha,
        cpf,
        avatar,
        tipoConta,
        veiculo,
        biografia
      })
    }
      
    async updateAccount(account) {

      if(!account){
        return "erro";
      }

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

      if(!cpf){
        return
      }

      await accountModel.destroy({
        where: {
          cpf
        },
      });
    
      return accountModel.findAll().then();
    }
}

module.exports = accountRepository