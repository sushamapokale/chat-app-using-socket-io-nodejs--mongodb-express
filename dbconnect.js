const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

const url = "mongodb://localhost:27017/Chat";

const connect = mongoose.connect(url, { useNewUrlParser: true });

module.exports = connect;
