import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Header from './components/Header';
import Board from './components/Board';

import GlobaStyle from './styles/global';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <Board />
      
      <GlobaStyle />
    </DndProvider>
  );
}

export default App;
