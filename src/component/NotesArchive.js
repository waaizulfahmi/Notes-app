import React from "react";

function NotesArchive({id, onArchived}){
    const icon = <img className="me-2" alt="icon-archive" src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/32/000000/external-archive-office-flatart-icons-lineal-color-flatarticons-1.png"/>
    return(
        <div class="btn-group justify-content-center inline " role="group">
            <button className="btn btn-secondary mb-4 text-white" onClick={() => onArchived(id)}><b>{icon}Arsipkan</b></button>
        </div>
    )
}



export default NotesArchive;