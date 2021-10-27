const mongoose = require('mongoose');
async function connect() {
  try {
    await mongoose.connect('mongodb+srv://hm1905:webappproject@webbappdb.kqhan.mongodb.net/WebbAppDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log('Connect successfully !');
  } catch (error) {
    console.log('Connect failed !');
  }
}

module.exports = {connect};
