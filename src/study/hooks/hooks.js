import React, { useState, useEffect } from 'react';
import '@/study/study.scss'

function Example() {
  //useState相当于class组件的this.setState. 但是他不会把旧的state和新的state合并
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0)

/*  const timeOut = setTimeout(()=>{
    console.log('触发定时器')
    setCount(1000)
  },2000)*/

  useEffect(()=>{
    console.log('xxx')
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
  })

  return (
    <div>
      {/*******************useState***********************/}
      <div className='panel'>
        <h1>useState</h1>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
      {/*******************useEffect***********************/}
      <TestComponent/>
    </div>
  )
}

function useCount(initialValue) {
  const [count, setCount] = useState(initialValue)
  return [
    count,
    ()=>{ setCount(count+1) }
  ]
}

function TestComponent(){
  const [count1, addCount1] = useCount(0)
  const [count2, addCount2] = useCount(0)
  return (
    <div className='panel'>
      <div onClick={()=>{addCount1()}}>count1:{count1}</div>
      <div onClick={()=>{addCount2()}}>count2:{count2}</div>
      <button onClick={btnCLick}>click</button>
    </div>
  )
}
function btnCLick(){
  console.log('xx')
}


export default Example
