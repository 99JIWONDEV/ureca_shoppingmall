// counterSlice.js

import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter', // 해당 슬라이스 이름은 고유해야 함
  initialState: {
    // 관리할 내용들 작성
    count: 1,
    label: '카운터',
  },
  reducers: {
    increment: (state, action) => {
      state.count += action.payload || 1
    },
    decrement: state => {
      state.count -= 1
    },
    reset: state => {
      state.count = 0
    },
  },
})
export const { increment, decrement, reset } = counterSlice.actions

// export default counterSlice.reducer
