var mongoose = require('mongoose');  

let Schema = mongoose.Schema;

var UserSchema = Schema({  
  name: String,
  email: String,
  password: String,
  role:String,
});
mongoose.model('user', UserSchema);

module.exports = mongoose.model('user',UserSchema);
