import React from "react";
import { useState } from "react";





export default function Book() {
  const [book, setBook] = useState(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const possibleChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const searchChar = possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    const randIndex = Math.floor(Math.random() * 50)
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchChar}&startingIndex=${randIndex}&key=AIzaSyCgGlkvNQgkSXMQSXdnenB2EoCnaAG2Z9c`)
  .then(response => response.json())
  .then(result => {
    setBook(result.items[Math.floor(Math.random()*10)])
    console.log(book)
  })
  };
  
  return (
    <div>
      <form>
        <button type="submit" onClick={handleSubmit}>
          Get Book
        </button>
      </form>
    </div>
  );
}
