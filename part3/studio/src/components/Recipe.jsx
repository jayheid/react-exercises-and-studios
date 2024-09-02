import { useState } from "react";

const RecipeAuthor = () => {
  let authorLink = "https://www.gordonramsay.com/";
  let authorPhoto =
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcompote.slate.com%2Fimages%2F69422bfb-57d9-4746-b03b-43a7521b39c2.jpeg%3Fwidth%3D780%26height%3D520%26rect%3D1881x1254%26offset%3D0x0&f=1&nofb=1&ipt=e53cdfd23a16c6183365716280a1842e69656ab04628b9ecc8b8bbd449c1f85d&ipo=images";
  let authorName = "Gordon Ramsay";

  return (
    <div>
      <img
        src={authorPhoto}
        alt=""
        style={{ objectFit: "contain", borderRadius: "50%" }}
      />
      <div>
        <h3>{authorName}</h3>
        <a href={authorLink}></a>
      </div>
    </div>
  );
};

const RecipeIngredients = () => {
  const ingredients = [
    "An Idiot",
    "Two Pieces of Bread",
    "Anchovies",
    "Mustard",
    "Olives",
  ];

  let ingredientListItems = ingredients.map((ingredient, index) => {
    return <li key={index}>{ingredient}</li>;
  });

  return (
    <div>
      <h3>Recipe Ingredients</h3>
      <ul>{ingredientListItems}</ul>
    </div>
  );
};

const RecipeDescription = () => {
  return (
    <div>
      <div>
        <h1>An Idiot Sandwich</h1>
        <p>You are what you eat.</p>
      </div>
      <div className="recipePhotoBlock">
        <RecipeIngredients />
        <RecipeAuthor />
      </div>
    </div>
  );
};

const RecipePhoto = () => {
  return (
    <img
      src="https://i.kym-cdn.com/entries/icons/original/000/020/115/idiot_sandwich.jpg"
      alt="An idiot sandwith"
      className="imageUpdates"
    />
  );
};

export default function RecipeDisplay() {
  return (
    <div className="recipePhotoBlock">
      <RecipePhoto />
      <div>
        <RecipeDescription />
      </div>
    </div>
  );
}
