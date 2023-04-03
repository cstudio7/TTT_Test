import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connect from '../../configs/db.js';
import Event from '../transcation';
import seedEvents from '../mock/eventData';

dotenv.config();

const seedDB = async () => {
  try {
    await connect();
    await Event.deleteMany({});
    await Event.insertMany(seedEvents);
  } catch (e) {
    console.error(e);
  }
};

seedDB().then(() => {
  console.log('Events table seeded');
  mongoose.connection.close();
});
