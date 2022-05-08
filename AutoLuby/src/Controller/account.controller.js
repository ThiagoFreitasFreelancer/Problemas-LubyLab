import { accountRepository } from "../Modules/Repositories/account.repository";


class accountCrontroller{

    async findAll(){
      return accountRepository.findAll();
    }

    findAccount(cpf) {
      return accountRepository.findAccount(cpf);
    }

    addAccount(account) {
      const dados = {
        name: account.params.name,
        cpf: account.params.cpf,
        id: account.params.id,
        descricao: account.params.descricao,
        senha: account.params.senha,
        avatar: account.params.avatar,
        tipoConta: account.params.tipoConta,
        veiculo: account.params.veiculo,
        biografia: account.params.biografia
      }
      return accountRepository.addAccount(dados);
    }
      
    updateAccount(account) {
      const dados = {
        name: account.params.name,
        cpf: account.params.cpf,
        id: account.params.id,
        descricao: account.params.descricao,
        senha: account.params.senha,
        avatar: account.params.avatar,
        tipoConta: account.params.tipoConta,
        veiculo: account.params.veiculo,
        biografia: account.params.biografia
      }
      return accountRepository.updateAccount(dados);
    }
      
    deleteAccount(cpf) {
      return accountRepository.deleteAccount(cpf);
    }

}

export { accountCrontroller }