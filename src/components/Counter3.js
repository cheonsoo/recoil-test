import React from 'react';
import { countSelector } from '../selector';   // 새로 추가된 코드
import { useRecoilState } from 'recoil';

function Counter() {
  const [count, setCount] = useRecoilState(countSelector);  // 읽기 전용!
  
  const plusCount = () => {
    setCount(count + 1);
  };
  const minusCount = () => {
    setCount(count - 1);
  };

  // 새로 추가된 코드
  const inputHandler = (e) => {
    const val = e.target.value;
    // counterHandler((prev) => prev + parseInt(val));
  };
  // const submitCount = () => counterHandler((pre) => pre + Number(currentInput));


 
return (
    <div>
     <div>
      <div>{count}</div>
  
      <button onClick={plusCount}>+</button>
      <button onClick={minusCount}>-</button>
      {/* <button onClick={resetCounter}>reset</button>
      <button onClick={resetCounter}>test</button> */}


      <div>
        {/* <input type='text' onChange={inputHandler}></input> */}
        {/* <button onClick={submitCount}>입력값 더하기</button>
        <div>{resultValue}</div> */}
      </div>

    </div>
    </div>
  );
}

export default Counter;