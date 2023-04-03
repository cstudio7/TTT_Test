import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
chai.should();
describe('Should get all Events', () => {
  it('Should get all Events', (done) => {
    chai.request(app).get('/events/?page=${1}&limit=${10}')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
