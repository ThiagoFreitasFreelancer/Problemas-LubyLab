const { Account } = require('../../Database/models');

module.exports = class accountRepository{

  //OK
  async findAll(limit = 10, base = 0){
    return await Account.findAll({
      limit: limit,
      offset: base
    })
  }

  async findAccount(cpf) {
    return await Account.findOne({
      where:{
        cpf:cpf
      }
    });
  }
  
  //OK
  async addAccount(account) {

    const { nome, email, senha, cpf, avatar, tipoConta, veiculo, biografia } = account;

    return await Account.create({
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

    await Account.update(
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
      
    return Account.findByPk(account.id);
  }
    
  //OK
  async deleteAccount(cpf) {

    return await Account.destroy({
      where: {
        cpf: cpf
      },
    });
  }

}