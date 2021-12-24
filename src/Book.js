const Book = (props) => {
  const clickHandler = () => {
    return console.log("Hello");
  };
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
export default Book;
