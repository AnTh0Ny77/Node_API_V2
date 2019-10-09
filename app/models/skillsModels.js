const mongoose = require('mongoose');

const SkillSchema = mongoose.Schema({
    title: String,
    content: String,
    type : String
}, {
        timestamps: true
    });

module.exports = mongoose.model('Skills', SkillSchema);