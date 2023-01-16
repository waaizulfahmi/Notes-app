import React from "react";
import NotesMove from "./NotesMove";

function DeleteButtonSecond({id, onDelete, onMove}) {
    const icon = <img className="me-1" alt="icon-delete" src="https://img.icons8.com/color/32/000000/delete-forever.png"/>
    return(
        <div className="text-center">
            <div class="btn-group  justify-content-center text-center" role="group" aria-label="Basic example">
                <button className="btn btn-danger mb-4" onClick={() => onDelete(id)}><b>{icon}Hapus</b></button> 
                <NotesMove id={id} onMove={onMove}/>           
            </div>
        </div>
    ) 
}

export default DeleteButtonSecond;