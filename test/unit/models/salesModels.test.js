const sinon = require('sinon');
const { expect } =require('chai');
require('dotenv').config();

const connection = require('../../../models/connection');
const salesModels = require('../../../models/salesModels');

describe('Buscar todos os produtos do BD', () => {
  describe('Quando não existir nenhum produto', () => {
    before(() => {
     const execute = [[]];      
    sinon.stub(connection, 'execute').resolves(execute);
    });

    after(() => {
     connection.execute.restore();
    });

      it('retorna um array', async () => {
        const result = await salesModels.getAll();
        expect(result).to.be.an('array');
      });

      it('retorna um array vazio', async () => {
        const result = await salesModels.getAll();
        expect(result).to.be.empty;
      });      
    });
  describe('Quando existe uma nova venda', () => {
    before(() => {
      const returnExecute = [
      [
        {
         saleId: 1,
         date: '2021-09-09T04:54:54.000Z',
         productId: 2,
         quantity: 2,
        },
      ],
    ];
    sinon.stub(connection , 'execute').resolves(returnExecute);
    });
    after(() => {
     connection.execute.restore();
    });

    it('Retorna um array', async () => {
      const result = await salesModels.getAll();
      expect(result).to.be.an('array');
    });

    it('Array não está vazio', async () => {
      const result = await salesModels.getAll();
        expect(result).to.be.not.empty;
    });

    it('Possui itens do tipo objeto', async () => {
      const [item] = await salesModels.getAll();
        expect(item).to.be.an('object');
    })

    it('Vendas, devem possuir "id", "name" e "quantity"', async () => {
      const [item] = await salesModels.getAll();
      expect(item).include.all.keys('saleId', 'date', 'productId', 'quantity');
    });
   });
});