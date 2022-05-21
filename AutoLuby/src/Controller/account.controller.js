//const { json } = require("sequelize");
const  accountRepository  = require("../Modules/Repositories/account.repository");

const accountRepo = new accountRepository();
module.exports = class AccountCrontroller{
 
  //OK
  async findAll(limit){

    const all = await accountRepo.findAll(limit)
    return all;

  }
  //OK
  async findAccount( cpf ){
    
    const result = await accountRepo.findAccount( cpf );
    return result
  }

  async findAccountLogin( email ){
    const account = await accountRepo.findAccountEmail(email);
    return account

  }

  async findAccountId(id){
    return await accountRepo.findAccountId(id);
  }

  async findAccontVendas(cpf){
    const result = await accountRepo.findAccontVendas(cpf);
    return result
  }

  //OK
  async addAccount(account) {    
    return await accountRepo.addAccount(account);
  }
    
  async updateAccount(account) {
    return await accountRepo.updateAccount(account);
  }
    
  //ok
  async deleteAccount(cpf) {
    return await accountRepo.deleteAccount(cpf)
  
  }
}

