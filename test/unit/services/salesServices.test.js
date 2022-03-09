const sinon = require('sinon');
const { expect } =require('chai');
require('dotenv').config();


const salesServices = require('../../../services/salesServices');
const salesModels = require('../../../models/salesModels');

describe('Buscar todas as vendas, no BD', () => {
  describe('Quando não existir nenhuma venda', () => {
    before(() => {
     const execute = [];      
    sinon.stub(salesModels, 'getAll').resolves(execute);
    });

    after(() => {
      salesModels.getAll.restore();
    });

      it('retorna um array', async () => {
        const result = await salesServices.getAll();
        expect(result).to.be.an('array');
      });

      it('retorna um array vazio', async () => {
        const result = await salesServices.getAll();
        expect(result).to.be.empty;
      });      
    });
  });