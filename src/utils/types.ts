export type User = {
  name: string;
  age: number
};

export type ButtonColor = 'red' | 'blue' | 'green';

type StakeHolder = {
  sessionId: string;
  name: string;
};

type Guest = Omit<StakeHolder, 'name'>;

export interface State {
  count: number
};

export type CounterAction =
  | { type: "reset" }
  | { type: "setCount"; value: State["count"] }

export interface CartItems {
  id: string;
  title: string;
  price: string;
  img: string;
  amount: number
}

export interface CartInitialState {
  cartItems: CartItems[];
  amount: number;
  total: number;
  isLoading: Boolean;
}

export interface ModalInitialState {
  isOpen: boolean;
};
