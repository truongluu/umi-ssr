function delay(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}

export default {
  state: 0,
  reducers: {
    add(state) {
      return state + 1;
    },
    reset(state) {
      return 0;
    },
  },
  effects: {
    *init({ type, payload }, { put, call, select }) {
      console.log('init count')
      yield call(delay, 1000);
      yield put({ type: 'add' });
      yield put({ type: 'add' });
    },
  },
};
