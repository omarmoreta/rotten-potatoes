import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";

// Pages
import Main from "./pages/Main";
import Comments from "./pages/Comments";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");

  const API_URL = "https://imdb-api.com/en/API/SearchAll/k_zeuppxb1/${value}";

  const fetchMovie = async () => {
    const response = await fetch(API_URL);
    const resData = await response.json();
    setData(data.results);
    console.log(data);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/comments" element={<Comments />} />
        </Routes>
      </BrowserRouter>
      <div>Movie: {data}</div>
      <Footer />
    </div>
  );
}

export default App;
