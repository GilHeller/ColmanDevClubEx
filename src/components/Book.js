import React from "react";
import "./Book.css";

const Book = ({ volumeInfo,  children}) => {
  const { title, imageLinks, authors, description } = volumeInfo;
  return (
    <div className="book-container">
      <div className="book-image-container">
        <img src={imageLinks?.thumbnail} alt="book-img" />
      </div>
      <div className="book-details-container">
        <div className="title-container">{title}</div>
        <div className="authors-container">
          {authors?.map((author) => (
            <div>{author}</div>
          ))}
        </div>
        <div className="description-container">{description}</div>
      </div>
      {children}
    </div>
  );
};

const BookItem = (props) => {
  const addToWishList = (_) => {
    const arrayContainsBooksName = props?.wishList?.filter(item => item?.title === props?.volumeInfo?.title);
    if (!arrayContainsBooksName?.length){
      props?.setWishList([...props?.wishList, props?.volumeInfo]);
    }
  }
  return (
      <Book {...props}>
        <button onClick={addToWishList}>Add to wish list</button>
      </Book>
  )
}

export {Book, BookItem};
