import React from 'react'

interface CoverProps {
  coverImg?: string,
}

export default function BookCover({ coverImg = 'https://books.google.com/books/content/images/frontcover/buc0AAAAMAAJ?fife=w400-h600' }: CoverProps) {
  return (
    <div>
      <img src={coverImg} alt='book cover'/>
    </div>
  )
}
