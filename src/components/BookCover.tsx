import React from 'react'
import { CoverImg } from './styled/CoverImg.styled'

interface CoverProps {
  coverImg?: string,
}

export default function BookCover({ coverImg }: CoverProps) {
  return (
    <div>
      <CoverImg src={coverImg} alt='book cover'/>
    </div>
  )
}
