import React from "react";
import { getInitialData } from "../utils";
import NotesFooter from "./NotesFooter";
import NotesInput from "./NotesInput";
import NotesList from "./NotesList";
import NotesNav from "./NotesNav";


class NotesApps extends React.Component{
    constructor(props){
        super(props);
        this.state={
            notes : getInitialData(),
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
        this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this);
        this.onMoveArchiveEventHandler = this.onMoveArchiveEventHandler.bind(this);
    }

    onDeleteHandler(id){
        if(window.confirm("Apakah Anda ingin menghapusnya?")){
            const notes = this.state.notes.filter(note => note.id !==id);
            this.setState({notes})

        }else{
            onclose();
        }     

    }

    onArchiveEventHandler(id){
        if(window.confirm("Arsipkan Data?")){
            const archiveStatus = [...this.state.notes];
            const noteIndex = archiveStatus.findIndex(note => note.id === id);
            if(archiveStatus[noteIndex].archived === true){
                archiveStatus[noteIndex].archived = false;
            }else{
                archiveStatus[noteIndex].archived = true;
            }
            this.setState({notes: archiveStatus});

        }else{
            onclose();
        }
        
    }

    onMoveArchiveEventHandler(id){
        const archiveStatus = [...this.state.notes];
        const noteIndex = archiveStatus.findIndex(note => note.id === id);
        if(archiveStatus[noteIndex].archived === true){
            archiveStatus[noteIndex].archived = false;
        }else{
            archiveStatus[noteIndex].archived = true;
        }
        this.setState({notes: archiveStatus});
    }
    
    onAddNotesHandler({title, body, createdAt}){
        this.setState((prevState) => {
            return{
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        archived : false,
                        createdAt,
                    }
                ]
            }
        });
    }
    render(){
        return(
            <div>
                <NotesNav />
                <h2 className="text-center pt-3" id="add-notes">Tambahkan Catatan Anda</h2>
                <NotesInput addNotes={this.onAddNotesHandler}/>
                <h3 className="text-center mb-5" id="list-notes"> Daftar Catatan Anda</h3>
                <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler} onArchived={this.onArchiveEventHandler} onMove={this.onMoveArchiveEventHandler}/>
                <NotesFooter />
            </div>
        );
    }
}

export default NotesApps;