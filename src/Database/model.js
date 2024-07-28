const mongo = require("mongoose");

const Item = new mongo.Schema({
    name:String,
    email:String,
    pass:String,
    loc:String
})

module.exports = mongo.model("Item",Item);