import React from "react";
import NotesItem from "./NotesItem";
import NotesItemSecond from "./NotesItemSecond";

function NotesList({notes, onDelete, onArchived, onMove}){
    const active = notes.filter(note => note.archived === false)
    const archived = notes.filter(note => note.archived === true)


    return(
        <div>
            <div>
                <h3 className="text-center mb-4">Catatan Aktif</h3>
            {
                active.length !== 0
                    ? active.map(ac => <NotesItem key={ac.id} id={ac.id} onDelete={onDelete} onArchived={onArchived} {...ac} />) :
                    <div class="container alert alert-warning text-center mb-5" role="alert">
                        Data Belum Tersedia !
                    </div>
            }
            </div>
            <div>
                <h3 className="text-center mb-4">Arsip</h3>
                {
                    archived.length !== 0
                        ? archived.map(ar => <NotesItemSecond key={ar.id} id={ar.id} onDelete={onDelete} onMove={onMove} {...ar} />) :
                        <div class="container alert alert-warning text-center mb-5" role="alert">
                            Data Belum Tersedia !
                        </div>
                }
            </div>

        </div>
        
    )       
    
}

export default NotesList;