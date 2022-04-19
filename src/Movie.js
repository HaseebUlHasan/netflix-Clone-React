import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [searchItem, setsearchItem] = useState([]);
  const [suggest, setSuggest] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=d7c50c3eb3952ee04bdbba082fbc32cf"
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=d7c50c3eb3952ee04bdbba082fbc32cf&query=${searchItem}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "serach");
        setTimeout(() => {
          setSuggest(data.results);
        }, 1000);

        return () => {
          clearTimeout();
        };
      });
  }, [searchItem]);

  return (
    <div>
      <div>
        {" "}
        <Navbar setsearchItem={setsearchItem} searchItem={searchItem} />{" "}
      </div>
      <br /> <br /> <br /> <br />
      <>
        {movies &&
          movies.length > 0 &&
          movies
            .sort((a, b) => {
              if (a.release_date < b.release_date) {
                return 1;
              }
              if (a.release_date > b.release_date) {
                return -1;
              }
              return 0;
            })
            .filter((mov) => {
              if (searchItem === "") {
                return mov;
              } else if (
                mov.title
                  .toString()
                  .toLowerCase()
                  .includes(searchItem.toString().toLowerCase())
              ) {
                return mov;
              }
            })
            .map((movie) => {
              return (
                <div
                  key={movie.id}
                  className="div"
                  onClick={() => {
                    navigate("/info", { state: movie });
                  }}
                >
                  <Card sx={{ maxWidth: 345 }}>
                    <div className="container">
                      <CardMedia
                        component="img"
                        height="200"
                        image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                        alt="image not found"
                      />
                      <div className="text-block">{movie.vote_average}</div>
                    </div>
                    <CardContent>
                      <Typography variant="p">
                        {movie.release_date} <br />
                        {movie.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
      </>
      <>
        {suggest &&
          suggest.length > 0 &&
          suggest
            .sort((a, b) => {
              if (a.release_date < b.release_date) {
                return 1;
              }
              if (a.release_date > b.release_date) {
                return -1;
              }
              return 0;
            })
            .filter((mov) => {
              if (searchItem === "") {
                return mov;
              } else if (
                mov.title
                  .toString()
                  .toLowerCase()
                  .includes(searchItem.toString().toLowerCase())
              ) {
                return mov;
              }
            })
            .map((movie) => {
              return (
                <div
                  key={movie.id}
                  className="div"
                  onClick={() => {
                    navigate("/info", { state: movie });
                  }}
                >
                  <Card sx={{ maxWidth: 345 }}>
                    <div className="container">
                      <CardMedia
                        component="img"
                        height="200"
                        image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                        alt="image not found"
                      />
                      <div className="text-block">{movie.vote_average}</div>
                    </div>
                    <CardContent>
                      <Typography variant="p">
                        {movie.release_date}
                        <br />
                        {movie.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
      </>
    </div>
  );
};

export default Movie;
