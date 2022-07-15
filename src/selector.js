import axios from 'axios';
import { selector } from 'recoil';
import { count, countState, inputState } from './atoms';

const countSelector = selector({
  key: 'CountSelector',
  get: async ({ get }) => {
    let val = 0;
    try {
      const url = 'https://api.bunjang.co.kr/api/1/find_v2.json?q=gpd+win+3&order=score&page=0&request_id=2022626041725&stat_device=w&n=100&stat_category_required=1&req_ref=search&version=4';
      const res = await axios.get(url);
      console.log(111);
      console.log(res.data.list);
      const res2 = await axios.get(url);
      console.log(222);
      console.log(res2.data.list);

      val = get(count);
    } catch (e) {
      console.log('[error] e');
      throw e;
    }

    return val;
  },
  set: ({ set }, newValue) => {
    if (newValue < 0) {
      alert('you cannot go under 0');
      return;
    }
    set(count, newValue);
  }
});

const countStateSelector = selector({
  key: 'CountState',

  get: ({ get }) => {
    const inputVal = get(inputState);
    const count = get(countState);

    return `추가된 카운트는 ${inputVal}이고, 현재 카운트는 ${count}입니다.`;
  }
});

export { countSelector, countStateSelector };