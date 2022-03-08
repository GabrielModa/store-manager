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

    after(() => {
     connection.execute.restore();
    });

      it('retorna um array', async () => {
        const result = await productsModels.getAll();
        expect(result).to.be.an('array');
      });

      it('retorna um array vazio', async () => {
        const result = await productsModels.getAll();
        expect(result).to.be.empty;
      });      
    });
  // describe('Quando existe produtos criados', () => {
  //   beforea(() => {
  //     const returnExecute = [
  //     [
  //       {
  //       id: 5,
  //       name: Celular,
  //       quantity: 2,
  //       },
  //     ],
  //   ];
  //   sinon.stub(connection , 'execute').resolves(returnExecute);
  //   });
  //   after(() => {
  //    connection.execute.restore();
  //   });

  //   it('Retorna um array', async () => {
  //     const result = await productsModels.getAll();
  //     expect(result).to.be.an('array');
  //   });

  //   it('Array não está vazio', async () => {
  //     const result = await productsModels.getAll();
  //       expect(result).to.be.not.empty;
  //   });

  //   it('Possui itens do tipo objeto', async () => {
  //     const [item] = await productsModels.getAll();
  //       expect(item).to.be.an('object');
  //   })

  //   it('Produtos, devem possuir "name" e "quantity"', async () => {
  //     const [item] = await productsModels.getAll();
  //     expect(item).include.all('name', 'quantity');
  //   });
  //   });
});