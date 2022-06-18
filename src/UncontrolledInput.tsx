import React, { useState, useRef } from 'react'

export const UncontrolledInput = () => {
  const [text, setText] = useState('default')
  const inputRef = useRef<HTMLInputElement | null>(null)
  console.log('[UncontrolledInput] render')
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={() => setText(inputRef.current?.value ?? '')}>
        To controll
      </button>
      <p>更新テキスト：{text}</p>
    </div>
  )
}
