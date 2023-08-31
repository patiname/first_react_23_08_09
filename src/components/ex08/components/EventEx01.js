import { useState } from "react";

export const EventEx01 = () => {
  const [num, setNum] = useState(0);
  //=>리액트 hook중 하나로 변수값을 저장 후 변경하여 사용 가능

  const plusHandler = () => {
    setNum(num + 1);
  };

  return (
    <div>
      <h2>클릭하면 숫자가 올라감</h2>
      <h3>{num}</h3>
      <button onClick={plusHandler}>+</button>
      <button onClick={() => setNum(num - 1)}>-</button>
    </div>
  );
};

// *리액트의 특징
// =>SPA (Single Page Application) 사용으로
// 어플리케이션 속도가 빠름
