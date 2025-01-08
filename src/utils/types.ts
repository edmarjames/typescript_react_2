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
