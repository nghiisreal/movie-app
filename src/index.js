import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import iconStar from "../src/icon/star.svg";
import iconHalfStar from "../src/icon/half-star.svg";
const moviesList = [
  {
    id: 1,
    title: "The Matrix",
    genre: ["Action", "Sci-Fi"],
    director: "Lana Wachowski, Lilly Wachowski",
    releaseDate: "1999-03-31",
    rating: 8.7,
    age: "R",
    imageSource: "/img/movie-1.jpeg",
  },
  {
    id: 2,
    title: "Inception",
    genre: ["Action", "Adventure", "Sci-Fi"],
    director: "Christopher Nolan",
    releaseDate: "2010-07-16",
    rating: 6.8,
    age: "PG-13",
    imageSource: "/img/movie-2.jpeg",
  },
  {
    id: 3,
    title: "Interstellar",
    genre: ["Adventure", "Drama", "Sci-Fi"],
    director: "Christopher Nolan",
    releaseDate: "2014-11-07",
    rating: 8.1,
    age: "PG-13",
    imageSource: "/img/movie-3.jpg",
  },
  {
    id: 4,
    title: "The Shawshank Redemption",
    genre: ["Drama"],
    director: "Frank Darabont",
    releaseDate: "1994-10-14",
    rating: 3,
    age: "R",
    imageSource: "/img/movie-4.jpg",
  },
  {
    id: 5,
    title: "Pulp Fiction",
    genre: ["Crime", "Drama"],
    director: "Quentin Tarantino",
    releaseDate: "1994-10-14",
    rating: 5.4,
    age: "R",
    imageSource: "/img/movie-3.jpg",
  },
  {
    id: 6,
    title: "The Godfather",
    genre: ["Crime", "Drama"],
    director: "Francis Ford Coppola",
    releaseDate: "1972-03-24",
    rating: 7.6,
    age: "R",
    imageSource: "/img/movie-1.jpeg",
  },
  {
    id: 7,
    title: "The Dark Knight",
    genre: ["Action", "Crime", "Drama"],
    director: "Christopher Nolan",
    releaseDate: "2008-07-18",
    rating: 1.5,
    age: "PG-13",
    imageSource: "/img/movie-4.jpg",
  },
  {
    id: 8,
    title: "Forrest Gump",
    genre: ["Drama", "Romance"],
    director: "Robert Zemeckis",
    releaseDate: "1994-07-06",
    rating: 4.0,
    age: "PG-13",
    imageSource: "/img/movie-2.jpeg",
  },
  {
    id: 9,
    title: "The Lord of the Rings: The Return of the King",
    genre: ["Action", "Adventure", "Drama"],
    director: "Peter Jackson",
    releaseDate: "2003-12-17",
    rating: 10.0,
    age: "PG-13",
    imageSource: "/img/movie-4.jpg",
  },
  {
    id: 10,
    title: "Fight Club",
    genre: ["Drama"],
    director: "David Fincher",
    releaseDate: "1999-10-15",
    rating: 8.8,
    age: "R",
    imageSource: "/img/movie-3.jpg",
  },
  {
    id: 11,
    title: "The Silence of the Lambs",
    genre: ["Crime", "Drama", "Thriller"],
    director: "Jonathan Demme",
    releaseDate: "1991-02-14",
    rating: 8.6,
    age: "R",
    imageSource: "/img/movie-2.jpeg",
  },
  {
    title: "The Green Mile",
    genre: ["Crime", "Drama", "Fantasy"],
    director: "Frank Darabont",
    releaseDate: "1999-12-10",
    rating: 8.6,
    age: "R",
    imageSource: "/img/movie-1.jpeg",
  },
];
const colorTags = [
  {
    name: "action",
    color: "#f92c2c",
  },
  {
    name: "adventure",
    color: "#358ef3",
  },
  {
    name: "sci-fi",
    color: "#f88934",
  },
  {
    name: "drama",
    color: "green",
  },
  {
    name: "crime",
    color: "#583c27",
  },
  {
    name: "romance",
    color: "#f81fdb",
  },
  {
    name: "thriller",
    color: "#424242",
  },
  {
    name: "fantasy",
    color: "#9718ba",
  },
];
function Header() {
  return (
    <div className="header-container">
      <h1>Netflix</h1>
    </div>
  );
}
function Footer() {
  return (
    <footer>
      <p>Hope you enjoy our best movies </p>
      <br />
      <hr />
    </footer>
  );
}
function CardMovie({ movieObj }) {
  const movieGenre = movieObj.genre;
  const titleLength = movieObj.title.length;
  const movieRating = movieObj.rating;
  // Làm tròn xuống
  // const star = Math.floor(movieRating / 2);
  // Làm tròn lên
  const star = movieRating / 2;
  // console.log(star);
  return (
    <div className="card-item">
      <img
        className="poster-movie"
        src={movieObj.imageSource}
        alt={movieObj.imageSource}
      ></img>
      <h3>
        {titleLength >= 21
          ? `${movieObj.title.slice(0, 21)}...`
          : `${movieObj.title}`}
      </h3>
      <h4>{movieObj.age}</h4>
      {/* <p>{movieObj.genre}</p> */}
      <div className="movie-tags">
        {movieGenre.map((g, index) => {
          return <MovieTags key={index} tags={g} />;
        })}
      </div>
      <div className="rating-container">
        <Stars stars={star} />
        {movieRating !== 0 && movieRating % 2 === 0 ? (
          <img src={iconStar} alt="rating" style={{ width: 30 }} />
        ) : (
          <img src={iconHalfStar} alt="rating" style={{ width: 30 }} />
        )}
        <div>
          <span style={{ fontSize: "24px", paddingLeft: 5 }}>
            {movieRating}
          </span>
        </div>
      </div>
      <div className="button-style">
        <Button play={movieRating} />
      </div>
    </div>
  );
}
function Button({ play }) {
  // console.log(play);
  return (
    <>
      {play >= 2 ? (
        <button type="button">Play</button>
      ) : (
        <button type="button" disabled>
          Play
        </button>
      )}
    </>
  );
}

function Stars({ stars }) {
  const starImages = [];
  for (let index = 1; index < stars; index++) {
    starImages.push(<img src={iconStar} alt="rating" style={{ width: 30 }} />);
  }
  return <Fragment>{starImages}</Fragment>;
}
function MovieTags({ tags }) {
  const tagName = tags.toLowerCase();
  const colors = colorTags;
  // Tìm color tương ứng với tên của tag (tagName)
  const colorObj = colors.find((c) => c.name === tagName);
  const backgroundColor = colorObj ? colorObj.color : "";
  // console.log(tagsName, " ", color);
  return (
    <Fragment>
      <span
        style={{
          backgroundColor: `${backgroundColor}`,
          marginRight: 10,
          padding: 8,
          borderRadius: "10px",
        }}
      >
        {tags}
      </span>
    </Fragment>
  );
}
function MoviesList() {
  const movies = moviesList;
  const moviesCount = movies.length;
  // console.log(movies, moviesCount);
  return (
    <Fragment>
      <h2>Welcome to Netflix!</h2>
      <div className="movie-container">
        {moviesCount > 0 ? (
          movies.map((movie, index) => {
            // console.log(movie.imageSource);
            return <CardMovie key={index} movieObj={movie} />;
          })
        ) : (
          <p>Don't have any movie</p>
        )}
      </div>{" "}
    </Fragment>
  );
}
function App() {
  // console.log(moviesList);
  return (
    <div className="App">
      <Header />
      <MoviesList />
      <Footer />
    </div>
  );
}
export default App();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
