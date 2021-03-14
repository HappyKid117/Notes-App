console.log('Starting app.');

const fs = require('fs');
const yargs = require('yargs');
const _ = require('lodash');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

console.log('Command: ', command);
//console.log('Yargs', argv);

if(command === 'add'){

    var note = notes.addNote(argv.title, argv.body);

    if(note){
        console.log('Note Created');
        notes.logNote(note);
    }else{
        console.log('Note title already in use');
    }
}else if(command === 'list'){

    notes.getAll();

}else if(command === 'remove'){

    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);

}else if(command === 'read'){

    var note = notes.getNote(argv.title);
    if(note){
        console.log('Fetching note...');
        notes.logNote(note);
    }else{
        console.log('Note not found');
    }

}else{
    console.log('Not a valid command.');
}


 