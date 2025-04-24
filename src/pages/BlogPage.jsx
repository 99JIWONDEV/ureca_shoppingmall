import Counter from '@/components/Counter'
import { decrement, increment, reset } from '@/store/counterSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

const BlogPage = () => {
  const dispatch = useDispatch()
  const increase = (num = 1) => {
    dispatch(increment(num))
  }
  const decrease = () => {
    dispatch(decrement())
  }
  const restart = () => {
    dispatch(reset())
  }
  return (
    <main>
      <h2>BlogPage</h2>
      <p>
        <Counter />
        <Counter />
        <Counter />
      </p>
      <button
        onClick={() => {
          increase()
        }}
      >
        증가하기
      </button>
      <button
        onClick={() => {
          increase(10)
        }}
      >
        증가하기(10)
      </button>
      <button onClick={decrease}>감소하기</button>
      <button onClick={restart}>초기화</button>
    </main>
  )
}

export default BlogPage
