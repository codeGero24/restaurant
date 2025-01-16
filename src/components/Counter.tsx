import React from 'react';
import useCounterStore from '../stores/counter.store';

export default function Counter() {
  const { count, increment, decrement } = useCounterStore();

  React.useEffect(() => {
    console.log('count', count);
  }, [count]);

  return (
    <div className='h-lvh'>
      <button className='btn text-primary' onClick={() => increment(1)}>
        Increment
      </button>
      <p>{count}</p>
      <button className='btn text-primary' onClick={() => decrement(1)}>
        Decrement
      </button>
    </div>
  );
}
