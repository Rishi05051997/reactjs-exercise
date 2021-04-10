import React, { useState } from "react";
import "./styles.css";
import Button from "@material-ui/core/Button";

var MoviewDB = {
  Action: [
    {
      name: "Bhagi-3",
      rating: "4.1/5"
    },
    {
      name: "Tanhaji",
      rating: "4.8/5"
    },
    {
      name: "Khuda Hafiz",
      rating: "4.0/5"
    },
    {
      name: "Torbaz",
      rating: "4.0/5"
    }
  ],

  Comedy: [
    {
      name: "Lootcase",
      rating: "4.3/5"
    },
    {
      name: "Coolie No 1",
      rating: "4.1/5"
    },
    {
      name: "Indoo Ki Javani",
      rating: "3.8/5"
    },
    {
      name: "Gulabo Sitabo",
      rating: "3.5/5"
    }
  ],
  Romantic: [
    {
      name: "Dil Bechara",
      rating: "4.9/5"
    },
    {
      name: "Love Aj Kal",
      rating: "4.0/5"
    },
    {
      name: "Shubh Mangal Jyada Savdhan",
      rating: "3.5/5"
    }
  ],
  Drama: [
    {
      name: "The Back Way",
      rating: "4.5/5"
    },
    {
      name: "The Devil All the time",
      rating: "4.0/5"
    },
    {
      name: "Choked",
      rating: "4.5/5"
    }
  ]
};

export default function App() {
  const [selectedMovie, setMovie] = useState("Action");
  function movieClickHandler(movie) {
    setMovie(movie);
  }
  return (
    <div className="App">
      <span id="heading"> 🎥🎥 Moviepedia 🎥🎥 </span>
      <p style={{ fontSize: "1rem" }}>
        {" "}
        The Best Movie recommendation Engine here....!!!!{" "}
      </p>

      <div>
        {Object.keys(MoviewDB).map((movie) => (
          <Button
            onClick={() => movieClickHandler(movie)}
            variant="contained"
            color="secondary"
            style={{
              margin: "1rem"
            }}
          >
            {movie}
          </Button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {MoviewDB[selectedMovie].map((movie) => (
            <li
              key={movie.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "1.2rem" }}> {movie.name} </div>
              <div style={{ fontSize: "0.8rem" }}> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          fontSize: "0.8rem",
          padding: "1rem"
        }}
      >
        Made with <span>❤️</span> by Vrushabh Dhatrak
      </div>
    </div>
  );
}
