const knexConfig = require('../Data/knexfile').production;

const knex = require('knex')(knexConfig);
module.exports = {
    async returnAllregistration(req, res){
        try {
            const feriados = await knex('feriados').select('*');
            res.status(200).json(feriados);
        } catch (err) {
        
            res.status(500).json({ erro: err.message });

        }
    },
    async searchRegistrationByDateParamen(req, res){
        const {Date }= req.params
   if (Date != null || Date != undefined) {
    
    try{
        const feriados = await knex('feriados').whereRaw("MONTH(`data`) = "+Date)
        res.status(200).json(feriados)
        }catch(err){
            res.status(400).json('Ocorreu algum erro na requesição')
            }
   }
    },async createRegistration(req,res){
         const { nome_feriado, data, tipo, estado } = req.params;

  try {
    if(!nome_feriado || !data || !tipo || !estado){
    res.status(400).json({erro: 'ocorreu erro ao passar o parametro vazio'})
    }
    
    await knex('feriados').insert({ nome_feriado:nome_feriado, data, tipo, estado });
    res.status(201).json({ mensagem: 'Feriado adicionado com sucesso!' });
  } catch (err) {
    res.status(500).json({ erro: 'OCorreu algum erro ao tentar realizar a operação' });
  }
    },
    async pullRegistration(req, res){
        const { id, nome_feriado, data, tipo, estado } = req.params;

  try {
    await knex('feriados')
      .where({ id })
      .update({ nome_feriado, data, tipo, estado });
    res.status(204)
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
    }
}