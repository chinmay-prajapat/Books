import ReactDOM from "react-dom";
import React from "react";
import { Books } from "./Books";
import Book from "./Book";
import "./style.css";

function BookList() {
  return (
    <section className="booklist">
      {Books.map((item) => {
        return <Book key={item.id} book={item} />;
      })}
    </section>
  );
}

ReactDOM.render(<BookList />, document.querySelector("#root"));
