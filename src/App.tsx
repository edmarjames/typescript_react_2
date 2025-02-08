// react imports
import {
  useEffect,
  useReducer,
  useState,
}                                      from 'react';

// internal imports
import Button                          from './components/Button';
import Navbar                          from './components/Navbar';
import CartContainer                   from './components/CartContainer';
import Modal                           from './components/Modal';
import {
  type CounterAction,
  type State,
  type User,
}                                      from './utils/types';
import {
  useAppDispatch,
  useAppSelector,
}                                      from './app/hooks';
import {
  calculateTotal,
  getCartItems
}                                      from './features/cart/cartSlice';
import './App.css';


const initialState: State = { count: 0 };

function stateReducer(state: State, action: CounterAction): State {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'setCount':
      return { ...state, count: action.value };
    default:
      throw new Error('Unknown action');
  }
};

function App() {

  // in states you can explicitly or implicitly define the types
  const [count, setCount] = useState<number>(0);
  const [isPrimary, setIsPrimary] = useState(true);
  const [text, setText] = useState('click me!');
  const [user, setUser] = useState<User | null>(null);

  const name = user?.name;

  const [state, dispatch] = useReducer(stateReducer, initialState);
  const addFive = () => dispatch({ type: 'setCount', value: state.count + 5 });
  const reset = () => dispatch({ type: 'reset' });

  const { cartItems, isLoading } = useAppSelector((store) => store.cart);
  const { isOpen } = useAppSelector((store) => store.modal);
  const reduxDispatch = useAppDispatch();

  useEffect(() => {
    reduxDispatch(calculateTotal());
  }, [cartItems]);

  useEffect(() => {
    reduxDispatch(getCartItems('Edmar'));
  }, []);

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  };

  return (
    <>
      {isOpen && <Modal/>}
      <Navbar/>
      <CartContainer/>
      <p></p>
      <Button
        backgroundColor='blue'
        textColor='white'
        fontSize={40}
        pillShape
        padding={[5, 10]}
        setCount={setCount}
        countValue={5}
        countHistory={[1, 2, 4]}
      >
        Click me!
      </Button>
      <p>{count}</p>

      <p>Count: {state.count}</p>
      <button onClick={addFive}>Add 5</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default App
