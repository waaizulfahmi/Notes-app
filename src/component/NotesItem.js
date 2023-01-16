import React from "react";
import NotesItemBody from "./NotesItemBody";
import DeleteButton from "./NotesDeleteItem";


function NotesItem({id, createdAt, title, body, onDelete, onArchived}){
    return(
        <div className="shadow-p container-sm mt-5 bg-info rounded mb-5">
            <NotesItemBody createdAt={createdAt} title={title} body={body} />
            <DeleteButton id={id} onDelete={onDelete} onArchived={onArchived} />
        </div>
    );
}

export default NotesItem;