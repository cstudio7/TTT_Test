import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connect from './configs/db.js';
import router from './routes/index.js';

dotenv.config();

const app = express();

app.disable('x-powered-by');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.get('/', (req, res) => res.status(200).send({ status: 200, message: 'Welcome to TTT Test Api!' }));
app.all('*', (req, res) => res.status(404).send({ status: 404, message: 'Page Not Found' }));

// connection setup
export const start = async () => {
  try {
    await connect();

    app.listen(process.env.PORT, () => {
      console.log(`REST API on http://localhost:${process.env.PORT}/`);
    });
  } catch (e) {
    console.error(e);
  }
};
start();
export default app;
