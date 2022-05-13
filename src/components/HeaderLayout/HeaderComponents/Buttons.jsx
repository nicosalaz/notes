import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    ModalFooter,
  } from "reactstrap";

const Buttons = () => {
    const [estado , setEstado] = useState({state: false})
    const handleClickOpen = ()=>{
        if (estado.state === true) {
            setEstado({state : false});
        }else{
            setEstado({state : true});
        }
        
    }
    return (
        <div style={styleButons.buttonStyle}>
            <button type='button' style={styleButons.buttons} onClick={handleClickOpen}>New Note</button>
            <button type='button' style={styleButons.buttons}>Filed Notes</button>
        <Modal isOpen={estado.state}>
          <ModalHeader>
           <div><h3>Insert Note</h3></div>
          </ModalHeader>

          <ModalBody>
            
            <FormGroup>
              <label>Title: </label>
              <input className="form-control" name="title" type="text"/>
            </FormGroup>
            
            <FormGroup>
              <label>Description: </label>
              <input className="form-control" name="description" type="text-area"/>
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary">
              Insert
            </Button>
            <Button color="danger" onClick={handleClickOpen}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
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