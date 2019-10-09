module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');
    const note = require('../models/noteModel.js');

    // Create a new Note
    app.post('/post', notes.create);
        
    // Retrieve all skill
    app.get('/skill', notes.findAll);

    // Retrieve Front skill
    app.get('/skill/front', notes.findFront);

    // Retrieve back skill
    app.get('/skill/back', notes.findBack);

    // Retrieve project Notes
    app.get('/skill/project', notes.findProject);

    //Retrieve all Notes
    app.get('/note/all', notes.find);

}