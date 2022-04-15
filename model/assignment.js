let mongoose = require('mongoose');
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

let Schema = mongoose.Schema;

let AssignmentSchema = Schema({
    id: Number,
    nom: String,
    designations:String,
    prof:String,
    imageProf:String,
    matiere:String,
    imageMatiere:String,
    note:Number,
    remarque:String,
    dateDeRendu: Date,
    rendu: Boolean
});

AssignmentSchema.plugin(aggregatePaginate);


// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Assignment', AssignmentSchema);
