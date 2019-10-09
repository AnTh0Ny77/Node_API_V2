const SkillNote = require('../models/skillsModels.js');
const note = require('../models/noteModel.js');
const { check, validationResult } = require('express-validator');
// Create and Save a new Note
exports.create = (req, res) => {

    check('title').isEmail(), () => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            }}
    // Create a note
    const Note = new note({
        title: req.body.title,
        content: req.body.content
    });

// Save Note in the database
    Note.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note."
            });
        });
};

// Retrieve and return all notes from the database.
    exports.find = (req, res) => {
        note.find()
            .then(notes => {
                res.send(notes);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while retrieving notes."
                });
            });
    };

// Retrieve and return all Skills from the database.
exports.findAll = (req, res) => {
    SkillNote.find()
        .then(skill => {
            res.send(skill);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Skills."
            });
        });
};

/// Retrieve and return Skills were type = front.
exports.findFront = (req, res) => {
    SkillNote.find({"type": "front"})
        .then(skill => {
            res.send(skill);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
};
/// Retrieve and return Skills were type = back.
exports.findBack = (req, res) => {
    SkillNote.find({ "type": "back" })
        .then(skill => {
            res.send(skill);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
};

/// Retrieve and return Skills were type = project.
exports.findProject = (req, res) => {
    SkillNote.find({ "type": "project" })
        .then(skill => {
            res.send(skill);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
};

