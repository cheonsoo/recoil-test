import React from 'react';
import { countState, inputState } from '../atoms';  // 새로 변경된 코드
import countStateSelector from '../selector';   // 새로 추가된 코드
import { 
  useRecoilState, 
  useRecoilValue, 
  useSetRecoilState, 
  useResetRecoilState 
} from 'recoil';

function Counter() {
  const [counter, setCounter] = useRecoilState(countState); 
  // useState와 같지만, useRecoilState을 사용하여 다른 파일에 있는 아톰을 읽을 수 있다.
  const currentCount = useRecoilValue(countState);  // 읽기 전용!
  const counterHandler = useSetRecoilState(countState); // 값만 변경 시키기 
  const resetCounter = useResetRecoilState(countState); // 디폴트값으로 값 변경
  
  // 새로 추가된 코드
  const currentInput = useRecoilValue(inputState);
  const inputHandlerState = useSetRecoilState(inputState);
  const resultValue = useRecoilValue(countStateSelector);
  
  
  const plusCount = () => {
    // counterHandler((pre) => pre + 1);
    setCounter(counter + 1);
  };
  const minusCount = () => {
    // counterHandler((pre) => pre - 1);
    setCounter(counter - 1);
  };

  // 새로 추가된 코드
  const inputHandler = (e) => {
    let target = e.target.value;
    inputHandlerState(target);
    setCounter(counter + target);
  };
  const submitCount = () => counterHandler((pre) => pre + Number(currentInput));


 
return (
    <div>
     <div>
      <div>{counter}</div>
  
      <button onClick={plusCount}>+</button>
      <button onClick={minusCount}>-</button>
      <button onClick={resetCounter}>reset</button>


      <div>
        <input type='text' onChange={inputHandler}></input>
        <button onClick={submitCount}>입력값 더하기</button>
        <div>{resultValue}</div>
      </div>

    </div>
    </div>
  );
}

export default Counter;