import React from 'react';
import './App.css';
import Students from './frontend/components/Students';
import Form from './frontend/components/Form';

function App() {
  return (
    <div className="App">
      <h1>BongBong</h1>
      <Students />
      <Form />
    </div>
  );
}

export default App;
