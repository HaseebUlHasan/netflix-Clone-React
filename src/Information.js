import React from "react";
import { useNavigate , useLocation } from "react-router-dom";

import Button from "@mui/material/Button";

const Information = () => {
  const navigate = useNavigate();
  const {state} = useLocation();
 
  return (
    <>
    <div className="information">
      <div className="info">
      <img
          src={`https://image.tmdb.org/t/p/original${state.backdrop_path}`}
          alt="img"
          style={{ width: "100%" , height : "500px" }}
        />
      </div>
      <div className="info">
        <h2> Movie Name : {state.title} </h2>
        <p> Rating : {state.vote_average}</p>
        <p> Language : {state.original_language} </p>
        <p> Release Date : {state.release_date} </p>
        <h4> Overview :</h4>
        <p > {state.overview} </p>
      </div> 
      </div> <br/>
    <div >  <Button  variant="outlined" onClick={() => navigate("/")}> Back </Button></div>
    </>
  );
};

export default Information;
