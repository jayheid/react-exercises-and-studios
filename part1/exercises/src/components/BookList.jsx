import classes from "./BookList.module.css";

export default function BookList() {
  let pageTitle = "Book List";
  let book1 = "https://m.media-amazon.com/images/I/61WvKcckCnL._SL1200_.jpg";
  let book2 = "https://m.media-amazon.com/images/I/61b03PRisyL._SL1360_.jpg";
  let book3 = "https://m.media-amazon.com/images/I/71+kLdUcDLL._SL1500_.jpg";

  return (
    <div>
      <h3 className={classes.bookHeading}>{pageTitle}</h3>
      <img className={classes.bookImage} src={book1} alt="The Power Broker" />
      <img
        className={classes.bookImage}
        src={book2}
        alt="Professional JavaScript for Web Developers"
      />
      <img
        className={classes.bookImage}
        src={book3}
        alt="JavaScript: Absolute Beginner's Guide"
      />
    </div>
  );
}
