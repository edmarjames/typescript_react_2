import { useState } from 'react';

import Button from './components/Button';
import { User } from './utils/types';
import './App.css';



function App() {

  // in states you can explicitly or implicitly define the types
  const [count, setCount] = useState<number>(0);
  const [isPrimary, setIsPrimary] = useState(true);
  const [text, setText] = useState('click me!');
  const [user, setUser] = useState<User | null>(null);

  const name = user?.name;

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
