
console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
    try{
        var noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    }catch(e){
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note= {
        title,
        body
    };
    var dupNotes = notes.filter((note) => note.title === title);

    if(dupNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    var notes = fetchNotes();
}

var removeNote = (title) => {
    var notes = fetchNotes();
    var fileteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(fileteredNotes);

    return (notes.length !== fileteredNotes.length);
} 

var getNote = (title) => {
    var notes = fetchNotes();
    var readNote = notes.filter((note) => note.title === title);
    return readNote[0];
}

var logNote = (note) => {
    debugger;
    console.log('---');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`); 
}

module.exports = {

    addNote: addNote,
    getAll: getAll,
    removeNote: removeNote,
    getNote: getNote,
    logNote,

};