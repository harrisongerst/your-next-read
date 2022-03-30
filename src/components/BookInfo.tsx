import React from 'react'

interface infoProps {
  title: string,
  authors: string[]
}

export default function BookInfo({title, authors}: infoProps) {
  const author = authors.map((author) => 
    <p>{author}</p>
  )
  return (
    <div>
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  )
}
