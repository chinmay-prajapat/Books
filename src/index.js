import ReactDOM from "react-dom";
import React from "react";
import "./style.css";

const books = [
  {
    img: "https://m.media-amazon.com/images/I/81jv44QdNwL._AC_SY200_.jpg",
    title: "Grandma's Bag of Stories",
    author: "Sudha Murty",
  },
  {
    img: "https://m.media-amazon.com/images/I/81jv44QdNwL._AC_SY200_.jpg",
    title: "Grandma's Bag of Stories",
    author: "Sudha Murty",
  },
];
function BookList() {
  return (
    <section className="booklist">
      {books.map((item) => {
        return <Book book={item} />;
      })}
    </section>
  );
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.book.img} alt="" />
      <h1>{props.book.title}</h1>
      <br />
      <h4>{props.book.author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.querySelector("#root"));
