const  accountRepository  = require("../Modules/Repositories/account.repository");

const accountRepo = new accountRepository();
module.exports = class AccountCrontroller{

  constructor(){
    this.findAccount()
    this.findAll()
    this.addAccount()
    this.updateAccount()
    this.deleteAccount()    
  }
  
  findAll(){
    return accountRepo.findAll()
  }

  //Ok
  findAccount( id ){
    return accountRepo.findAccount(id);
  }

  addAccount(account) {    
    return accountRepo.addAccount(account);
  }
    
  updateAccount(account) {
    return accountRepo.updateAccount(account);
  }
    
  deleteAccount(cpf) {
    return accountRepo.deleteAccount(cpf);
  }

}

