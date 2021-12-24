import ReactDOM from "react-dom";
import React from "react";

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image> </Image> <Title />
      <Author />
    </article>
  );
};

function Image() {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/51wcMnPFh9L._SX323_BO1,204,203,200_.jpg"
      alt=""
    />
  );
}

const Title = () => <h1> I Love You to the Moon and Back </h1>;
const Author = () => <h4> Amelia Hepworth </h4>;
ReactDOM.render(<BookList />, document.querySelector("#root"));
