import React from "react";

function NotesNav(){
    return(
        <nav class="navbar navbar-expand-lg bg-info py-3 mb-5">
        <div class="container-fluid">
            <a class="navbar-brand text-white ps-5 display-6" href="#"><b>Aplikasi Catatan</b></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active text-white ps-5" aria-current="page" href="#add-notes">Tambah Catatan</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white ps-3" href="#list-notes">Daftar Catatan</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    
        
    )
}

export default NotesNav;