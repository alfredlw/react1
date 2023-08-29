
export const Keyboard = ({increment, decrement}) => {
    return (
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    );
  };
