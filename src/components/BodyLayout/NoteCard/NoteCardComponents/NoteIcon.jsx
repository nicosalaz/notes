import React from 'react';

const NoteIcon = () => {
    return (
        <div style={styleNoteIcon.noteIconContainer}>
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M11 44Q9.8 44 8.9 43.1Q8 42.2 8 41V7Q8 5.8 8.9 4.9Q9.8 4 11 4H29.05L40 14.95V41Q40 42.2 39.1 43.1Q38.2 44 37 44ZM11 41H37Q37 41 37 41Q37 41 37 41V16.3H27.55V7H11Q11 7 11 7Q11 7 11 7V41Q11 41 11 41Q11 41 11 41ZM11 41Q11 41 11 41Q11 41 11 41V16.3V7Q11 7 11 7Q11 7 11 7V41Q11 41 11 41Q11 41 11 41Z"/></svg>
        </div>
    );
};

const styleNoteIcon={
    noteIconContainer:{
        width:'20%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
}

export default NoteIcon;