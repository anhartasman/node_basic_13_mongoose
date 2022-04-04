const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
let _db;
const uri =
  "mongodb+srv://admin:ph8HjaDfuRZBuLh@cluster0.aay6z.mongodb.net/shop?retryWrites=true&w=majority";
const mongoConnect = (callback) => {
  // mongodb+srv://admin:ph8HjaDfuRZBuLh@cluster0.aay6z.mongodb.net/?authSource=admin&readPreference=primary&ssl=true
  return MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then((client) => {
      console.log("Connected!");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }

  throw "No database found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
