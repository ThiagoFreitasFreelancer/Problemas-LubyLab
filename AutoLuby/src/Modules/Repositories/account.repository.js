const { Account, VehicleBuy } = require('../../Database/models');
const bkrypt = require('bcryptjs');

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

  async findAccountEmail(email) {

    const account =  await Account.findOne({ 
      where:{
        email : email
      }
     });
    return account;

  }

  async findAccountId(id){
    return await Account.findOne({
      where:{
        id : id
      }
    })
  }
  
  //OK
  async addAccount(account) {

    const { nome, email, senha, cpf, avatar, tipoConta, veiculo, biografia, vendas } = account;

    return await Account.create({
      nome: nome,
      email,
      senha: bkrypt.hashSync(senha),
      cpf,
      avatar,
      tipoConta,
      veiculo,
      biografia,
      vendas
    })
  }

  async findAccontVendas(cpf){

    //const vendas = {};

    const account = await this.findAccount(cpf)    

    if(!account) return venda = {account : "Not Fount", "vendas" : "Not Found"}

    const vendas = await VehicleBuy.findOne({
      where:{
        vendedorCpf : cpf
      }
    });

    const accountData = {
      nome: account.nome,
      email: account.email,
      tipoConta: account.tipoConta
    }

    const vendasData = {
      preco: vendas.preco,
      data: vendas.data,
      chassiVeiculo: vendas.chassiVeiculo,
      status: vendas.statusVeiculo
    }

    const venda = { vendasData, accountData }

    return venda
    
  }
    
  async updateAccount(account) {

    await Account.update(
      {
        nome: account.nome ? account.nome : this.nome,
        email: account.emailL ? account.email : this.email,
        senha: account.senha ? account.senha : this.senha,
        avatar: account.avatar ? account.avatar : this.avatar,
        tipoConta: account.tipoConta ? account.tipoConta : this.tipoConta,
        vendas: account.vendas ? account.vendas + vendas: this.vendas,
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