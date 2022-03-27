/*
하고자했던 기능 구현
1. setInterval로 count가 +되고 난 후 clearInterval 작동해서 종료
2. user가 버튼 클릭시 count+1 되도록 기능구현.

문제점
1. clearInterval이 동작하지 않음, 정확히 말하면 return이 동작하지 않음.
*/

import React, { useState } from "react";
import { useEffect } from "react";

const UseEffectTest = () => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleBtnClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div> count => {count}</div>
      <button onClick={handleBtnClick}>버튼</button>
    </>
  );
};

export default UseEffectTest;
