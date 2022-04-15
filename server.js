let express = require('express');
let app = express();
let bodyParser = require('body-parser');

let assignment = require('./routes/assignments');
let matiere = require('./routes/matiere');
let auth = require('./routes/auth');

let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//mongoose.set('debug', true);

// remplacer toute cette chaine par l'URI de connexion à votre propre base dans le cloud s
const uri = 'mongodb+srv://domi375:domi375@cluster0.1d4sc.mongodb.net/assign?retryWrites=true&w=majority'

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify:false
};

mongoose.connect(uri, options)
  .then(() => {
    console.log("Connecté à la base MongoDB assignments dans le cloud !");
    console.log("at URI = " + uri);
    console.log("vérifiez with http://localhost:8010/api/ que cela fonctionne")
    },
    err => {
      console.log('Erreur de connexion: ', err);
    });

// Pour accepter les connexions cross-domain (CORS)
app.use((req, res, next) =>  {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// Pour les formulaires
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let port = process.env.PORT || 8010;

// les routes
const prefix = '/api';

app.route(prefix + '/assignments')
  .get(assignment.getAssignments)
  .post(assignment.postAssignment)
  .put(assignment.updateAssignment);


app.route(prefix + '/assignments/:id')
  .get(assignment.getAssignment)
  .delete(assignment.deleteAssignment);

app.route(prefix + '/assignmentsRenduTrue/:rendu')
  .get(assignment.getAssignmentDevoirsRenduTrue)

app.route(prefix + '/assignmentsRenduFalse/:rendu')
  .get(assignment.getAssignmentDevoirsRenduFalse)

app.route(prefix + '/auth/register')
  .post(auth.register);

app.route(prefix + '/auth/login')
  .post(auth.login);

  app.route(prefix + '/auth/logout')
  .post(auth.logout);

  app.route(prefix + '/auth/rememberme')
  .post(auth.rememberme);

  app.route(prefix + '/matiere')
  .get(matiere.getAllMatiere)
  .post(matiere.postMatiere);

// On démarre le serveur
app.listen(port, "0.0.0.0");
console.log('Serveur démarré  sur http://localhost:' + port);

module.exports = app;


