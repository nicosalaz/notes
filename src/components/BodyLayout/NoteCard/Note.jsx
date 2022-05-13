import React from 'react';
import NoteIcon from './NoteCardComponents/NoteIcon';
import NoteDescription from './NoteCardComponents/NoteDescription';
import ButtonsNote from './NoteCardComponents/ButtonsNote';

const Note = (props) => {
    return (
        <div style={styleNote.note} >
            <NoteIcon />
            <NoteDescription 
                titulo={props.titulo}
                descripcion = {props.descripcion}
            />
            <ButtonsNote
                key = {props.key}
            />
        </div>
    );
};

const styleNote={
    note:{
        width:'40%',
        display:'flex',
        flexFlow:'row nowrap',
        justifyContent:'space-between',
        border:'solid',
        marginTop:'20px',
    }
}

export default Note;