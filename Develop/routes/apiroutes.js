const noteData = require('../db/data');

module.exports = (app) => {

    app.get('/api/notes', (req,res) => {
        console.log(noteData);
        res.json(noteData)});

    app.post('/api/notes', (req,res) =>
    {console.log(req.body); 
        let id = {title : req.body.title,
                  text : req.body.text,
                  id : Date.now()}  //creates the unique id 
        noteData.push(id);
        res.json(true)
    });

    app.post('/api/clear', (req, res) => {
        noteData.length = 0
        res.json({ok : true});
    });
    
};

