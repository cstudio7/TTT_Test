import chai from 'chai';
import app from '../index';

describe('Should get all Events By Category', () => {
  it('Should get all Events', (done) => {
    chai.request(app).get('/event/category?category="AI"')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
