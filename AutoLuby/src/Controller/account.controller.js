const { json } = require("sequelize");
const  accountRepository  = require("../Modules/Repositories/account.repository");

const accountRepo = new accountRepository();
module.exports = class AccountCrontroller{
 
  //OK
  async findAll(response){

    const all = await accountRepo.findAll()
    return response.json(all);

  }
  
  async findAccount( request, response ){
    
    const result = await accountRepo.findAccount(request.id);

    console.log(result)

    if(!result){
      return json({ "erro" : "erro" })
    }

    return result
  }

  //OK
  addAccount(account) {    
    return accountRepo.addAccount(account);
  }
    
  updateAccount(account) {
    return accountRepo.updateAccount(account);
  }
    
  async deleteAccount(cpf, response) {

    if(await accountRepo.deleteAccount(cpf)){
      return response.status(201).json({"Sucess" : "sucess"})
    }

    return response.status(500).json({"Erro" : "item não excluido"})
  
  }
}

