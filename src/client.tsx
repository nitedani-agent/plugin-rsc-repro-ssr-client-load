'use client'

import React from 'react'
import { label } from './label.ts'

export function ClientCounter() {
  const [count, setCount] = React.useState(0)

  return (
    <button onClick={() => setCount((count) => count + 1)}>
      {label}: {count}
    </button>
  )
}
