import React from "react";
import { useState, useEffect } from "react";
import BookCover from "./BookCover";
import BookInfo from "./BookInfo";
import { Container } from "./styled/Container.styled";
import { CoverImg } from "./styled/CoverImg.styled";
import { Info } from "./styled/Info.styled"



export default function Book() {
  const [book, setBook] = useState(
    {
      "kind": "books#volume",
      "id": "6P_jN6zUuMcC",
      "etag": "iJhwX/dq5x4",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/6P_jN6zUuMcC",
      "volumeInfo": {
      "title": "Flowers for Algernon",
      "authors": [
      "Daniel Keyes"
      ],
      "publisher": "Houghton Mifflin Harcourt",
      "publishedDate": "2004",
      "description": "Oscar-winning film Charly starring Cliff Robertson and Claire Bloom-a mentally challenged man receives an operation that turns him into a genius...and introduces him to heartache.",
      "industryIdentifiers": [
      {
      "type": "ISBN_13",
      "identifier": "9780156030083"
      },
      {
      "type": "ISBN_10",
      "identifier": "015603008X"
      }
      ],
      "readingModes": {
      "text": false,
      "image": true,
      },
      "pageCount": 311,
      "printType": "BOOK",
      "categories": [
      "Fiction"
      ],
      "averageRating": 4,
      "ratingsCount": 178,
      "maturityRating": "NOT_MATURE",
      "allowAnonLogging": true,
      "contentVersion": "1.3.3.0.preview.1",
      "panelizationSummary": {},
      "imageLinks": {
      "smallThumbnail": "http://books.google.com/books/content?id=6P_jN6zUuMcC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=6P_jN6zUuMcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
      "language": "en",
      "previewLink": "http://books.google.com/books?id=6P_jN6zUuMcC&printsec=frontcover&dq=flowers+inauthor:keyes&hl=&cd=1&source=gbs_api",
      "infoLink": "http://books.google.com/books?id=6P_jN6zUuMcC&dq=flowers+inauthor:keyes&hl=&source=gbs_api",
      "canonicalVolumeLink": "https://books.google.com/books/about/Flowers_for_Algernon.html?hl=&id=6P_jN6zUuMcC"
      },
      "saleInfo": {
      "country": "US",
      "saleability": "NOT_FOR_SALE",
      "isEbook": false
      },
      "accessInfo": {
      "country": "US",
      "viewability": "PARTIAL",
      "embeddable": true,
      "publicDomain": false,
      "textToSpeechPermission": "ALLOWED",
      "epub": {
      "isAvailable": false
      },
      "pdf": {
      "isAvailable": true,
      "acsTokenLink": "http://books.google.com/books/download/Flowers_for_Algernon-sample-pdf.acsm?id=6P_jN6zUuMcC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
      },
      "webReaderLink": "http://play.google.com/books/reader?id=6P_jN6zUuMcC&hl=&printsec=frontcover&source=gbs_api",
      "accessViewStatus": "SAMPLE",
      "quoteSharingAllowed": false
      },
      "searchInfo": {
      "textSnippet": "WINNER OF THE HUGO AWARD AND THE NEBULA AWARD The classic novel that inspired the Academy Award-winning movie Charly Daniel Keyes, the author of eight books, was born in Brooklyn, New York, and received his B.A. and M.A. degrees from ..."
      }
      }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const possibleChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const searchChar = possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    const randIndex = Math.floor(Math.random() * 50)
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchChar}&startingIndex=${randIndex}&key=AIzaSyCgGlkvNQgkSXMQSXdnenB2EoCnaAG2Z9c`)
  .then(response => response.json())
  .then(result => {
    setBook(result.items[Math.floor(Math.random()*10)])
  })
  };
  
  return (
    <div>
      <Container>
        <CoverImg>
          <BookCover coverImg={book.volumeInfo.imageLinks.smallThumbnail} />
        </CoverImg>
        <Info>
          <BookInfo title={book.volumeInfo.title} authors={book.volumeInfo.authors}/>
        </Info>
      </Container>
      <Container>
        <form>
          <button type="submit" onClick={handleSubmit}>
            Get Book
          </button>
        </form>
      </Container>
      
    </div>
  );
}
