const sinon = require('sinon');
const { expect } =require('chai');
require('dotenv').config();


const productsServices = require('../../../services/productsServices');
const productsModels = require('../../../models/productsModels');

describe('Buscar todos os produtos do BD', () => {
  describe('Quando não existir nenhum produto', () => {
    before(() => {
     const execute = [];      
    sinon.stub(productsModels, 'getAll').resolves(execute);
    });

    after(() => {
      productsModels.getAll.restore();
    });

      it('retorna um array', async () => {
        const result = await productsServices.getAll();
        expect(result).to.be.an('array');
      });

      it('retorna um array vazio', async () => {
        const result = await productsServices.getAll();
        expect(result).to.be.empty;
      });      
    });
  });