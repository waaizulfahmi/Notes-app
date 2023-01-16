import React from "react";

function NotesMove({id, onMove}){
    const icon = <img className="me-1" alt="icon-move" src="https://img.icons8.com/flat-round/32/000000/circled-left.png"/>
    return(
        <div class="btn-group justify-content-center inline " role="group">
            <button className="btn btn-success mb-4 text-white" onClick={() => onMove(id)}><b>{icon}Pindahkan</b></button>
        </div>
    )
}



export default NotesMove;