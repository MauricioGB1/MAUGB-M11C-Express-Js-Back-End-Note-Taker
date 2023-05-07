const path = require('path');
const fs = require('fs');


function createNewNote(body, notes) {
    const note = body;
    notes.push(note);


    fs.writeFileSync(
        path.join(_dirname, '../db/db.json'),
        JSON.stringify({ notes }, null, 2)
    )
    return note;
};

// New section
// function deleteNote(id, notes) {
//     let notes = notes.filter(el => {
//         if (el.id == id) {
//             return false
//         } else {
//             return true
//         }
//     })


//     let index = 0;
//     notes.forEach(note => {
//         note.id = index;
//         index +=1;
//     });

//     fs.WriteFileSync(
//         path.join(_dirname, '../db/notes.json'),
//         JSON.stringify({ notes }, null, 2)
//     );
//     return notes;

// }

module.exports = { createNewNote };
 