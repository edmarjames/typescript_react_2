import { useState } from 'react';

import Button from './components/Button';
import './App.css';

function App() {

  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Button
        backgroundColor='blue'
        textColor='white'
        fontSize={40}
        pillShape
        padding={[5, 10]}
        setCount={setCount}
      >
        Click me!
      </Button>
      <p>{count}</p>
    </>
  )
}

export default App
