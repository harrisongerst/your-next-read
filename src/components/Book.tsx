import React from "react";
import { useState } from "react";





export default function Book() {
  const [book, setBook] = useState(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch(`https://www.googleapis.com/books/v1/volumes?q=flowers&key=AIzaSyCgGlkvNQgkSXMQSXdnenB2EoCnaAG2Z9c`)
  .then(response => response.json())
  .then(result => {
    setBook(result)
  })
    console.log(book);
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
