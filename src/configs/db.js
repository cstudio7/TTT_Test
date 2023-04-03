import mongoose from 'mongoose';

const connect = (url = process.env.DB_URL, opts = {}) => {
  mongoose.connect(url, {
    ...opts,
  });

  mongoose.connection.on('error', (err) => {
    console.log('err', err);
  });
  mongoose.connection.on('connected', (err, res) => {
    console.log('Connection establish');
  });
};
export default connect;
