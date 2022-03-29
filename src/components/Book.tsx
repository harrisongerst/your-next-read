import React from 'react'
import { useState } from 'react'


const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log("we hittin");
}

export default function Book() {
  return (
    <div>
    <form>
    <button type="submit" onClick={handleSubmit}>Get Book</button>
  </form>
  </div>
  )
}
