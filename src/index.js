import ReactDOM from "react-dom";
import React from "react";
import "./style.css";

const books = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/81jv44QdNwL._AC_SY200_.jpg",
    title: "Grandma's Bag of Stories",
    author: "Sudha Murty",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/81jv44QdNwL._AC_SY200_.jpg",
    title: "Grandma's Bag of Stories",
    author: "Sudha Murty",
  },
];
function BookList() {
  return (
    <section className="booklist">
      {books.map((item) => {
        return <Book key={item.id} book={item} />;
      })}
    </section>
  );
}
const clickHandler = () => {
  return console.log("Hello");
};

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.book.img} alt="" />
      <h1 onClick={() => console.log("hello")}>{props.book.title}</h1>
      <br />
      <h4>{props.book.author}</h4>
      <button type="button" onClick={clickHandler}>
        Button
      </button>
    </article>
  );
};

ReactDOM.render(<BookList />, document.querySelector("#root"));
