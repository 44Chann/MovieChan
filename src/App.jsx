import { useState, useEffect } from "react";
import "./App.css";
import { Search } from "./componets/Search";
import SearchIcon from "./serach.svg";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Movies } from "./componets/Movies"
import { MovieDetails } from "./componets/Details";

function App() {
  const API_URL = "http://www.omdbapi.com/?apikey=455e9942";
  let navigate = useNavigate()
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("avengers");
  const [onsearch, setOnsearch] = useState(false);

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);

  };
  useEffect(() => {
    searchMovie(search);

  }, [onsearch]);

  const handleSearch = (e) => {
    setSearch(e.target.value)

  }

  const handleOnsearch = () => {
    navigate("/")
    if (search && search !== " ") {
      setOnsearch(!onsearch)
      console.log(search)
    }

  }

  return (
    <>
      <div className="app">
        <h1>MovieChan</h1>
        <Search svg={SearchIcon} value={search} handleSearch={handleSearch} setOnsearch={handleOnsearch} />

        <div className="container">
          <Routes>
            <Route path="/" element={<Movies moveis={movies} />} />

          </Routes>

        </div>
      </div>
    </>
  );
}

export default App;
