const sinon = require('sinon');
const { expect } =require('chai');
require('dotenv').config();

const salesController = require('../../../controllers/salesController');
const salesServices = require('../../../services/salesServices');

describe('Buscar todos os produtos do BD', () => {
  describe('Quando não existir nenhum produto', () => {
    const response = {}; 
    const request = {};      

    before(() => {
      response.body = {};
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns([]);

    sinon.stub(salesServices, 'getAll').resolves([]);
    });
      it('retorna um array', async () => {
        await salesController.getAll(request, response);
        expect(response.status.calledWith(200)).to.be.equal(true);       
      });

      it('retorna um array vazio', async () => {
         await salesController.getAll(request, response);
        expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
      });      
    });
  });
