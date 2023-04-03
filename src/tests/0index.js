import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
chai.should();

describe('App Tests', () => {
  it('should return a welcome message', (done) => {
    chai.request(app).get('/')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('should return an error and never crash', (done) => {
    chai.request(app).get('/api/v1/ddd')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});
