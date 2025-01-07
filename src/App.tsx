import { useState } from 'react';

import Button from './components/Button';
import './App.css';

function App() {

  return (
    <Button
      backgroundColor='blue'
      textColor='white'
      fontSize={40}
      pillShape
      padding={[5, 10]}
    >
      Click me!
    </Button>
  )
}

export default App
