export default function BookList() {
  let pageTitle = "Book List";
  let book1 = "https://m.media-amazon.com/images/I/61WvKcckCnL._SL1200_.jpg";
  let book2 = "https://m.media-amazon.com/images/I/61b03PRisyL._SL1360_.jpg";
  let book3 = "https://m.media-amazon.com/images/I/71+kLdUcDLL._SL1500_.jpg";

  return (
    <div>
      <h3>{pageTitle}</h3>
      <img src={book1} alt="The Power Broker" />
      <img src={book2} alt="Professional JavaScript for Web Developers" />
      <img src={book3} alt="JavaScript: Absolute Beginner's Guide" />
    </div>
  );
}
