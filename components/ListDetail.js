import React, { useState, useEffect } from 'react'

export default function ListDetail({ item }) {
  const [result, setResult] = useState('')

  useEffect(async () => {
      const res = await fetch(`${item}`)
      const data = await res.json()
      setResult(data.name ?? data.title)
  }, [])

  return <li>{result}</li>
}