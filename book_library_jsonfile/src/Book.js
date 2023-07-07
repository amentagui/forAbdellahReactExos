import React from 'react'

export default function Book({book}) {
  const {name,image,discription,author,category,price,rating}=book
  return (
   <>
   <div class="book-card">
        <img
          src={image}
          alt=""
        />

        <h4 class="book-title">{name}</h4>
        <h3 class="book-author">{author}</h3>
        <hr />
        <h5 class="book-category">{category}</h5>
        <p class="book-description">
          {discription}
        </p>
        <div class="book-price-rating">
          <span class="book-rating">{rating}</span>
          <span class="book-price">{price}</span>
        </div>
      </div>
   
   </>
  )
}
