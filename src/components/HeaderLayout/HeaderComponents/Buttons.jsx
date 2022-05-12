import React from 'react';

const Buttons = () => {
    return (
        <div style={styleButons.buttonStyle}>
            <button type='button' style={styleButons.buttons}>New Note</button>
            <button type='button' style={styleButons.buttons}>Filed Notes</button>
        </div>
    );
};

const styleButons ={
    buttonStyle:{
        heigth:'100%',
        width: '50%',
        display:'flex',
        flexFlow:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
    },
    buttons:{
        width:'80px',
        heigth:'50px',
        borderStyle:'none',
        borderRadius:'5px',
        backgroundColor:'#ff5832',
        fontFamily: '"Lato", sans-serif',
        fontSize:'14px'
    }
    
};
export default Buttons;