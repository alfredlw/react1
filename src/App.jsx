import { useState } from "react";
import {Keyboard} from './keyboard'
import { Display } from "./display";


export const AppRoot = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };
  return (
    <main>
      <Display count={count} color="red"/>
      <Keyboard decrement={decrement} increment={increment}/>
    </main>
  );
};

