import React from 'react'

interface infoProps {
  title: string,
  authors: string[]
}

export default function BookInfo({title, authors}: infoProps) {
  let authorList: string | JSX.Element[] = "Unknown"
  if(typeof(authors) != "undefined"){
    authorList = authors.map((author, index) => 
    <li key={index}>{author}</li>
  )
  }
  return (
    <div>
      <h3>{title}</h3>
      <h4>Authors:</h4>
      <ul>{authorList}</ul>
    </div>
  )
}
