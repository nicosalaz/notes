import React from 'react';

const NoteDescription = () => {
    return (
        <div style={styleNoteDescription.textContainer}>
            <p>Titulo</p>
            <p>Descripcion</p>
        </div>
    );
};

const styleNoteDescription ={
    textContainer:{
        width:'40%',
        display:'flex',
        flexFlow:'column',
        justifyContent:'center',
        alignItems:'center',
    }
};

export default NoteDescription;