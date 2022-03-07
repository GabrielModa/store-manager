const Joi = require('joi');

const sales = Joi.object({
  productId: Joi.required()
    .messages({
      'any.required': '400|"productId" is required',
  }),
  quantity: Joi.number().integer().positive().strict()
  .required()
    .messages({
      'any.required': '400|"quantity" is required',
      'number.positive': '422|"quantity" must be greater than or equal to 1',          
  }),
});

module.exports = Joi.array().items(sales);