import AccountRepository from "../Models/account/account.model";

async function findAll(req, res) {
  const clients = await AccountRepository.findAll();
  res.json(clients);
}

export default { findAll };
