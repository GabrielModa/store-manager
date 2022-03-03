const Joi = require('joi');

// Req.body é um obj, então acesso ele, pego o item para validação
// coloco as validações, coloco que é required(obrigatorio)
// .message para acessar as msg e cada uma tem uma chamada, olhar documentação
// strict para garantir q tem que ser um numero não uma string q possa ser convertida em numb , pq o Joi por natureza se pegar uma string já manda pra number

module.exports = Joi.object({
  name: Joi.string().min(5)
  .required()
    .messages({
      'any.required': '400|"name" is required',
      'string.min': '422|"name" length must be at least 5 characters long',
  }),
  quantity: Joi.number().integer().min(0).strict()
  .required()
    .messages({
      'any.required': '400|"quantity" is required',
      'number.positive': '422|"quantity" must be greater than or equal to 1',          
  }),
});