//const { json } = require("sequelize");
const  accountRepository  = require("../Modules/Repositories/account.repository");

const accountRepo = new accountRepository();
module.exports = class AccountCrontroller{
 
  //OK
  async findAll(){

    const all = await accountRepo.findAll()
    return all;

  }
  //OK
  async findAccount( id ){
    
    const result = await accountRepo.findAccount( id );
    return result
  }

  //OK
  addAccount(account) {    
    return accountRepo.addAccount(account);
  }
    
  async updateAccount(account) {
    return await accountRepo.updateAccount(account);
  }
    
  //ok
  async deleteAccount(id) {
    return await accountRepo.deleteAccount(id)
  
  }
}

