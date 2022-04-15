let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let MatiereSchema = Schema({
    designation: String,
    image:String,
    prof:String,
    imageProf:String,
});
       

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Matiere', MatiereSchema);
