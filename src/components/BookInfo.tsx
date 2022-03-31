import React from 'react'

interface infoProps {
  title: string,
  authors: string[]
}

export default function BookInfo({title, authors}: infoProps) {
  console.log(authors)
  let author: string | JSX.Element[] = "Unknown"
  if(typeof(authors) != "undefined"){
    author = authors.map((author) => 
    <p>{author}</p>
  )
  }
  return (
    <div>
      <h3>{title}</h3>
      {author}
    </div>
  )
}
