// Assignment est le "modèle mongoose", il est connecté à la base de données
let Assignment = require("../model/assignment");

/* Version sans pagination */
// Récupérer tous les assignments (GET)
/*
function getAssignments(req, res){
    Assignment.find((err, assignments) => {
        if(err){
            res.send(err)
        }

        res.send(assignments);
    });
}
*/

// Récupérer tous les assignments (GET), AVEC PAGINATION
function getAssignments(req, res) {

  var aggregateQuery = Assignment.aggregate();
  
  Assignment.aggregatePaginate(
    aggregateQuery,
    {
      page: parseInt(req.query.page) || 1,
      limit: parseInt(req.query.limit) || 10,
    },
    (err, assignments) => {
      if (err) {
        res.send(err);
      }
      res.send(assignments);
    }
  );
}

// Récupérer un assignment par son id (GET)
function getAssignment(req, res) {
  let assignmentId = req.params.id;

  Assignment.findOne({ id: assignmentId }, (err, assignment) => {
    if (err) {
      res.send(err);
    }
    res.json(assignment);
  });
}

// Récupérer un assignment par son id (GET)
/*
function getAssignmentDevoirsRendu(req, res) {
  console.log("Ato no tonga le search ZAVATRA ONE !! ")
  let assignmentRendu = req.params.rendu;
  let toSearch  = true;
  console.log(assignmentRendu.rendu)
  console.log("ZAVATRA ONE !!!! ")
    Assignment.find({ rendu: false }, (err, assignment) => {
      if (err) {
        res.send(err);
      }
      console.log("From back !!! ")
      res.json(assignment);
    });

}
*/

// Récupérer un assignment par son id (GET)
/*
function getAssignmentDevoirsRendu(req, res) {
  console.log("Ato no tonga le search ZAVATRA ONE !! ")
  let assignmentRendu = req.params.rendu;
  let toSearch  = true;
  console.log(assignmentRendu)
  console.log("ZAVATRA ONE !!!! ")
    Assignment.find({ rendu: false }, (err, assignment) => {
      if (err) {
        res.send(err);
      }
      console.log("From back !!! ")
      res.json(assignment);
    });

}
*/

// Récupérer tous les assignments (GET), AVEC PAGINATION
function getAssignmentDevoirsRenduTrue(req, res) {

  var aggregateQuery = Assignment.aggregate([{ $match: { rendu: true } }]);

  Assignment
  .aggregatePaginate(
    aggregateQuery,
    {
      page: parseInt(req.query.page) || 1,
      limit: parseInt(req.query.limit) || 10,
    },
    (err, assignments) => {
      if (err) {
        res.send(err);
      }
      res.send(assignments);
    }
  );
}

// Récupérer tous les assignments (GET), AVEC PAGINATION
function getAssignmentDevoirsRenduFalse(req, res) {

  var aggregateQuery = Assignment.aggregate([{ $match: { rendu: false } }]);

  Assignment
  .aggregatePaginate(
    aggregateQuery,
    {
      page: parseInt(req.query.page) || 1,
      limit: parseInt(req.query.limit) || 10,
    },
    (err, assignments) => {
      if (err) {
        res.send(err);
      }
      res.send(assignments);
    }
  );
}

// Ajout d'un assignment (POST)
function postAssignment(req, res) {
  let assignment = new Assignment();
  assignment.id = req.body.id;
  assignment.nom = req.body.nom;
  assignment.prof = req.body.prof;
  assignment.imageProf = req.body.imageProf;
  assignment.designations = req.body.designation;
  assignment.matiere = req.body.matiere;
  assignment.imageMatiere = req.body.imageMatiere;
  assignment.note = req.body.note;
  assignment.remarque = req.body.remarque;
  assignment.dateDeRendu = req.body.dateDeRendu;
  assignment.rendu = req.body.rendu;

  console.log("POST assignment reçu :");
  console.log(assignment);

  assignment.save((err) => {
    if (err) {
      res.send("cant post assignment ", err);
    }
    res.json({ message: `${assignment.designation} saved!` });
  });
}

// Update d'un assignment (PUT)
function updateAssignment(req, res) {
  console.log("UPDATE recu assignment : ");
  console.log(req.body);
  Assignment.findByIdAndUpdate(
    req.body._id,
    req.body,
    { new: true },
    (err, assignment) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.json({ message: "updated" });
      }
    }
  );
}

// suppression d'un assignment (DELETE)
function deleteAssignment(req, res) {
  Assignment.findByIdAndRemove(req.params.id, (err, assignment) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: `${assignment.nom} deleted` });
  });
}

module.exports = {
  getAssignments,
  postAssignment,
  getAssignment,
  updateAssignment,
  deleteAssignment,
  getAssignmentDevoirsRenduTrue,
  getAssignmentDevoirsRenduFalse,
};
