import React from "react";
import { showFormattedDate } from "../utils";

function NotesItemBody({createdAt, title, body}){
    return(
        <div className="container">
            <h5 className="text-white pt-4"><b>{showFormattedDate(createdAt)}</b></h5>
            <h4 className="text-white"><b>{title}</b></h4>
            <p className="text-white mb-5"><b>{body}</b></p>
        </div>
    )
}

export default NotesItemBody;