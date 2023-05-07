
const router = require('express').Router();

const { createNewNote } = require('../../lib/notes');

const { notes } = require('../../db/db');


router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});


router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    console.log(notes);

    const note = createNewNote(req.body, notes);
    res.json(note);
   }
);

// router.post('/notes', (req, res) => {
//     if(notes){
//         req.body.id = notes.length.toString();
//     } else
//     {req.body.id = 0}
//     res.json(createNewNote(req.body, notes));
// });

// router.delete('/notes/:id', async (req, res) => {
//     const { id } = req.params
//     notes = await deleteNote(id, notes);
//     res.json(notes);
// });

module.exports = router;