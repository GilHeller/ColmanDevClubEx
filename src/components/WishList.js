import React from 'react';
import { Book } from './Book';
import "./WishList.css";

const WishList = (props) => {
    return ( 
    <div className='wish-list-page'>
        Wish List
        {props?.wishList?.map((book, itemId=0) => (
            <Book key={itemId} volumeInfo={book}/>
        ))}
    </div>
    );
}
 
export default WishList;