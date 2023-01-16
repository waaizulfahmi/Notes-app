import React from "react";
import NotesItemBody from "./NotesItemBody";
import DeleteButtonSecond from "./NotesDeleteItemSecond";


function NotesItemSecond({id, createdAt, title, body, onDelete, onMove}){
    return(
        <div className="shadow-p container-sm mt-5 bg-info rounded mb-5">
            <NotesItemBody createdAt={createdAt} title={title} body={body} />
            <DeleteButtonSecond id={id} onDelete={onDelete} onMove={onMove} />
        </div>
    );
}

export default NotesItemSecond;