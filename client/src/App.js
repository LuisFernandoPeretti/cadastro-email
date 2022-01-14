import React, { Fragment } from 'react';
import './App.css';

// components

import InputCadastro from './components/InputCadastro';
//import ListCadastro from './components/ListCadastro';

function App() {
  return (
    <Fragment>
      <div className='container'>
        <InputCadastro />
      </div>
    </Fragment>
  );
}

export default App;
