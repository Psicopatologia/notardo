import React, { Component } from 'react';
import Navigation from './Navigation';
import CreateTask from './CreateTask';
import '../App.css';

class CreateNote extends Component{

    render(){
        return(
            <div >
                <Navigation titulo="Notardo"></Navigation>
                <h2 className="text-black ml-4">Fecha Random</h2>
                {/* <div className="p-10 campoTexto ">
                    
                </div> */}
                {/* <div className="botonGenerico"></div> */}
                <input
                type="text"
                name="nota"
                className="form-control campoTexto"
                ></input>
                <button type="submit" className="btn btn-primary botonGenerico">
                    Save
                </button>
            </div>
        );
    }
}

export default CreateNote;

