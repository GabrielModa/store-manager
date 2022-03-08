const sinon = require('sinon');
const { expect } =require('chai');

const connection = require('../../../models/connection');


const productsModels = require('../../../models/productsModels');

describe('Buscar todos os produtos do BD', () => {
    describe('Quando não existir nenhum produto', () => {
      before(() => {
      const execute = [[]];
      
      sinon.stub(connection, 'execute').resolves(execute);
      });

      it('retorna um array', async () => {
        const result = await productsModels.getAll();
        expect(result).to.be.an('array')
      });

      it('retorna um array vazio', async () => {
        const result = await productsModels.getAll();
        expect(result).to.be.empty;
      });
      
    });
});