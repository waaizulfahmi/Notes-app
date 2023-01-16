import React from "react";
import NotesArchive from "./NotesArchive";

function DeleteButton({id, onDelete, onArchived}) {
    const icon = <img className="me-1" alt="icon-delete" src="https://img.icons8.com/color/32/000000/delete-forever.png"/>
    return(
        <div className="text-center">
            <div class="btn-group  justify-content-center text-center" role="group" aria-label="Basic example">
                <button className="btn btn-danger mb-4" onClick={() => onDelete(id)}><b>{icon}Hapus</b></button> 
                <NotesArchive id={id} onArchived={onArchived} />           
            </div>
        </div>
    ) 
}

export default DeleteButton;