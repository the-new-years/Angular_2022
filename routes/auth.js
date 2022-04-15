var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var User = require('../model/User');

/**
 * Configure JWT
 */
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var bcrypt = require('bcryptjs');
var config = require('./config'); // get config file

function login (req, res) {

  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) return res.status(500).send('Error on the server.');
    if (!user) return res.status(401).send('No user found.');
    
    // check if the password is valid
    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });

    // if user is found and password is valid
    // create a token
    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });

    // return the information including token as JSON
    res.status(200).send({ auth: true,name: user.name,role: user.role, token: token });
  });

};

function logout (req, res) {
  res.status(200).send({ auth: false, token: null });
};

function register (req, res) {
  var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  let user= new User();
  user.name = req.body.name;
  user.password = hashedPassword;
  user.email = req.body.email;
  user.role = req.body.role;
  //console.log("POST user reçu :");
  //console.log(user);

  user.save((err) => {
    if (err) {
      res.send("cant post user ", err);
    }
    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send({ auth: true, token: token })
  });
};

function rememberme (req, res) {
  var token = req.headers['x-access-token'];
  console.log("Token register +++ "+token); 
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, config.secret, function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    
    res.status(200).send(decoded);
  });
};
module.exports = {
  login,
  register,
  logout,
  rememberme
};