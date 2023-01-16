import React from 'react';
import {createRoot} from 'react-dom/client';
import NotesApps from './component/NotesApp';

import './styles/style.css';


const root = createRoot(document.getElementById('root'));
root.render(<NotesApps />)