import React from 'react'

interface infoProps {
  title: string,
  authors: string[]
}

export default function BookInfo({title, authors}: infoProps) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{authors}</p>
    </div>
  )
}
