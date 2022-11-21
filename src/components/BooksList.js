import React, { useEffect, useState } from "react";
import "./BookList.css";
import {BookItem} from "./Book.js";

const BooksList = (props) => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState(null);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  } 
  
  const getBooks = () => {
    const url = "https://www.googleapis.com/books/v1/volumes?q=a";
    fetch(`${url}?q=${search}`, {method: "GET"})
    .then(res => res?.json())
    .then(data => setBooks(data?.items));
  }

  useEffect(() => {
    getBooks()
  })

  return (
    <div className="booklist-page">
      <p>{`Hello, ${props?.username}`}</p>
      <div>
        <input onChange={handleSearch}/>
        <button onClick={getBooks}>Search</button>
      </div>
      <div className="booklist">
        {
        books?
        books.map((book, itemId=0) => (
          <BookItem key={itemId} wishList={props?.wishList} setWishList={props?.setWishList} volumeInfo={book?.volumeInfo}/>
        )) : <p>Loading...</p>
        }
      </div>
    </div>
  );
};

export default BooksList;
