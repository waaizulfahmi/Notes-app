import React from "react";


class NotesInput extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            title:'',
            body:'',
            createdAt: '',
        }
        
        this.onDateChangeEventHandler = this.onDateChangeEventHandler.bind(this);
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onNotesChangeEventHandler = this.onNotesChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);

    }

    onDateChangeEventHandler(event){
        this.setState(() => {
            return{
                createdAt: event.target.value,
            }
        });
    }

    onTitleChangeEventHandler(event){
        this.setState(() => {
            return{
                title: event.target.value,
            }
        });
    }


    onNotesChangeEventHandler(event){
        this.setState(() =>{
            return{
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event){
        event.preventDefault();
        this.props.addNotes(this.state);
        alert("Catatan Anda dengan berhasil disimpan !");

    }

    

    render(){
        const icon = <img className="me-1" alt="icon-save" src="https://img.icons8.com/fluency/48/40C057/save.png" width="32" height="32"/>
        return(
            <div className="shadow-p container-sm mt-5 bg-info rounded mb-5">
                <form onSubmit={this.onSubmitEventHandler}>
                    <label class="form-label mt-3 text-white"><b>Tanggal</b></label>
                    <input type="date" class="form-control col-sm-10 w-25" value={this.state.createdAt} onChange={this.onDateChangeEventHandler} required/>

                    <label class="form-label mt-3 text-white"><b>Judul Catatan</b></label>
                    <input type="text" class="form-control " placeholder="Masukan Judul Catatan..." value={this.state.title} onChange={this.onTitleChangeEventHandler} required/>
                    
                    <label  class="form-label mt-3 text-white" ><b>Detail Catatan</b></label>
                    <textarea class="form-control" placeholder="Tambahkan catatan anda disini..." value={this.state.body} onChange={this.onNotesChangeEventHandler} rows="3" required/>
                    <div class="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary mt-3 mb-3 p-2"><b>{icon}Simpan</b></button>
                    </div>
                </form>
            </div>

        )
    }
}


export default NotesInput;