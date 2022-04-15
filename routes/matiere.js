// Matiere est le "modèle mongoose", il est connecté à la base de données
let Matiere = require("../model/matiere");

//recuperer tous les matieres
function getAllMatiere(req, res) {
    Matiere.find({}, function (err, users) {
        if (err) return res.status(500).send("Probleme dans getAllMatiere.");
        res.status(200).send(users);
    });
};

// Récupérer un Matiere par son id (GET)
function getMatiere(req, res) {
  let matiereId = req.params.id;

  Matiere.findOne({ id: matiereId }, (err, matiere) => {
    if (err) {
      res.send(err);
    }
    res.json(Matiere);
  });
}
// Ajout d'un Matiere (POST)
function postMatiere(req, res) {
  let matiere = new Matiere();
  matiere.designation = req.body.designation;
  matiere.image = req.body.image;
  matiere.prof = req.body.prof;
  matiere.imageProf = req.body.imageProf;
  
  console.log("POST Matiere reçu :");
  console.log(matiere);

  matiere.save((err) => {
    if (err) {
      res.send("cant post Matiere ", err);
    }
    res.json({ message: `${matiere} saved!` });
  });
}

// Update d'un Matiere (PUT)
function updateMatiere(req, res) {
  console.log("UPDATE recu Matiere : ");
  console.log(req.body);
  Matiere.findByIdAndUpdate(
    req.body._id,
    req.body,
    { new: true },
    (err, matiere) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.json({ message: "updated" });
      }
    }
  );
}
// suppression d'un Matiere (DELETE)
function deleteMatiere(req, res) {
  Matiere.findByIdAndRemove(req.params.id, (err, Matiere) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: `${Matiere.nom} deleted` });
  });
}

module.exports = {
  getAllMatiere,
  postMatiere,
  getMatiere,
  updateMatiere,
  deleteMatiere,
};
