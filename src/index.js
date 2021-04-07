import ReactDOM from 'react-dom'
import React from 'react'
import './index.css';

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/Primeiro';

ReactDOM.render(
    <div id="app">
        <Primeiro> </Primeiro>
        <ComParametro
        titulo="Situação do aluno"
        aluno="Pedro Silva"
        nota={9.2} />
    </div>,
    document.getElementById('root') 
)   