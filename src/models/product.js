function delay(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}

export default {
  state: {
    list: []
  },
  reducers: {
    add(state) {
      return {
        ...state,
        list: ['truongluu']
      }
    }
  },
  effects: {
    *init({ type, payload }, { put, call, select }) {
      console.log('init product')
      yield put({ type: 'add' });
    },
  },
};
