const db = require("../models");

// Defining methods for the Property Controller
module.exports = {
    findAllProperties: function(req, res) {
        db.Property
            .find()
            .sort({date:-1})
            .then(dbModel => res.json(dbModel))
            .catch(err =>res.status(422).json(err));
    },
    findPropertyById: function(req,res) {
        db.Property
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findTopProperties: function(req, res) {
        db.Property
                .find()
                .sort({"likedByUser":-1})
                .limit(Number.parseInt(req.params.number))
                .then(dbModel =>{return res.json(dbModel)})
                .catch(err => res.status(422).json(err));
    },
    createProperty: function (req, res) {
        db.Property
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    updateProperty: function(req, res) {
        db.Property
                .findOneAndUpdate({_id:req.params.id}, req.body)
                .then(dbModel => res.json(dbModel))
                .catch(err => res.status(422).json(err));
    },
    removeProperty: function (req, res){
        db.Property
        .findById({_id:req.params.id})
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err =>res.status(422).json(err));
    }
}
