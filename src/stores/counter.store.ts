import { create } from 'zustand';

type CounterState = {
  count: number;
};

type CounterActions = {
  increment: (qty: number) => void;
  decrement: (qty: number) => void;
  reset: () => void;
};

const initialState: CounterState = {
  count: 0,
};

const useCounterStore = create<CounterState & CounterActions>(set => ({
  ...initialState,
  increment: (qty: number) => set(state => ({ count: state.count + qty })),
  decrement: (qty: number) => set(state => ({ count: state.count - qty })),
  reset: () => set(() => ({ count: 0 })),
}));

// SETTERS
const setIncrement = (state: CounterActions) => state.increment;
const setDecrement = (state: CounterActions) => state.decrement;
const setReset = (state: CounterActions) => state.decrement;

// GETTERS
const getCount = (state: CounterState) => state.count;

export { setIncrement, setDecrement, setReset, getCount };

export default useCounterStore;
