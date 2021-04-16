const noteData = require('../db/data');
const router = require('express').Router();

module.exports = (app) => {

    app.get('/api/notes', (req,res) =>{
       res.json(noteData)
    });
    app.post('/api/notes', (req,res) =>{
        noteData.push(req, res);
        res.json(true)
    });
    app.post('/api/clear', (req, res) => {
        noteData.length = 0
        res.json({ok : true});
    });
};

module.exports = router;
