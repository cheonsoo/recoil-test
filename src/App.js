import React, { Suspense } from 'react';
import './App.css';
import { RecoilRoot } from 'recoil';
// import Counter from './components/Counter';
// import Counter2 from './components/Counter2';
import Counter3 from './components/Counter3';

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<div>Loading ...</div>}>
        <Counter3 />
      </Suspense>
    </RecoilRoot>
  );
}

export default App;