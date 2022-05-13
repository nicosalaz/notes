import React from 'react';
import Note from './NoteCard/Note';

const data = [
    {key:'1',titulo:'nicolas',descripcion:'descripcion simple'},
    {key:'2',titulo:'juan',descripcion:'descripcion simple'},
    {key:'3',titulo:'felipe',descripcion:'descripcion simple'},
    {key:'4',titulo:'andres',descripcion:'descripcion simple'},
]

const Notes = () => {
    return (
        <div style={styleNotes.notesContainer}>
            {data.map((dato) =>(
                <Note
                titulo = {dato.titulo}
                descripcion = {dato.descripcion}
                key = {dato.key}
                />
            ))};
        </div>
    );
};

const styleNotes ={
    notesContainer:{
        width:'100vw',
        display:'flex',
        flexFlow:'row wrap',
        justifyContent:'space-around',
        alignItems:'center',
    }
}

export default Notes;