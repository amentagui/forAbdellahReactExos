
import { useState } from 'react';
import './App.css';
import Book from './Book'
import books from './books.json'

function App() {
  const [text,setText]=useState("")
  const filteredBooks = books.books.filter((b)=>b.name.toLowerCase().trim().includes(text.toLowerCase()))
  return (
    <>
    <input id="search-name" type="text" value={text} onChange={(e)=> setText(e.target.value)}/>
    <div class="books-container">
    {
filteredBooks.map((b)=> 
<Book key={b.id} book={b}/>
)
    }
    </div>
    </>
  );
}

export default App;
