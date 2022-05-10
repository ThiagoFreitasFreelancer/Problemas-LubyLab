const accountModel = require("../Model/account");
class accountRepository{

  //OK
  async findAll(){
    return await accountModel.findAll()
  }


  async findAccount(id) {
    return await accountModel.findByPk(id);
  }
  
  //OK
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

    await accountModel.update(
      {
        nome: account.nome ? account.nome : this.nome,
        email: account.emailL ? account.email : this.email,
        senha: account.senha ? account.senha : this.senha,
        cpf: account.cpf ? account.cpf : this.cpf,
        avatar: account.avatar ? account.avatar : this.avatar,
        tipoConta: account.tipoConta ? account.tipoConta : this.tipoConta,
        veiculo: account.veiculo ? account.veiculo : this.veiculo,
      },
      {
        where: {
          id: account.id,
        },
      }
    );
      
    return accountModel.findByPk(account.id);
  }
    
  //OK
  async deleteAccount(cpf) {

    if(!cpf){
      return
    }

    return await accountModel.destroy({
      where: {
        cpf: cpf
      },
    });
  }
}

module.exports = accountRepository