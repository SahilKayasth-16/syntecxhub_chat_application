import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Chat from './pages/Chat';
import Join from './pages/Join';

function App() {
  return (
      <Routes>
        <Route path='/chat' element={ <Chat />} />
        <Route path='/' element={ <Join />} />
      </Routes>
    
  );
}

export default App;
