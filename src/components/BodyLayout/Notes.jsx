import React from 'react';
import Note from './NoteCard/Note';

const Notes = () => {
    return (
        <div style={styleNotes.notesContainer}>
            <Note/>
            <Note/>
            <Note/>
            <Note/>
            
        </div>
    );
};

const styleNotes ={
    notesContainer:{
        width:'100vw',
        display:'flex',
        flexFlow:'row wrap',
        justifyContent:'space-around',
        alignItems:'center'
    }
}

export default Notes;