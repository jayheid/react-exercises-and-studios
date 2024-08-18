import classes from "./HobbyLinks.module.css";

export default function HobbyLinks() {
  let hobbyLinks = [
    "https://www.reddit.com/r/WeAreTheMusicMakers/",
    "https://www.reddit.com/r/vermicompost/",
  ];
  return (
    <div className={classes.hobbyContainer}>
      <h3 className={classes.hobbyHeading}>Hobby List</h3>
      <ol>
        <li>
          <a href={hobbyLinks[0]}>Music Makers Subreddit</a>
        </li>
        <li>
          <a href={hobbyLinks[1]}>Vermicomposting Subreddit</a>
        </li>
      </ol>
    </div>
  );
}
