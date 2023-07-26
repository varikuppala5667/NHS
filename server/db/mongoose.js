var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Change the database with yours
mongoose.connect("mongodb://mongodb:27017/my_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
