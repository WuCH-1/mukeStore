var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    "productId": { type: String },
    "productName": { type: String },
    "salePrice": { type: Number },
    "prodcutImage": { type: String },
    "productNum": { type: String },
    "checked": { type: String },
})

module.exports = mongoose.model('Good', productSchema);