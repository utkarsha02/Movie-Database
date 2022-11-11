import { useState } from "react";
import "./App.css";
import { NavBar, MovieList } from "./components";
import axios from "axios"; //http client send http req to endpoints lib for CRUD
// https://creative-pie-6d555c.netlify.app/
const API_BASE_URL = "http://www.omdbapi.com";

function App() {
  // const [dataVal,helpefunc] = useState[<Intitalzer>]
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //using async bcz we are fetching api and it takes some time, so use await or setIsLoading
  //search triggers a function when we hit enter key
  const search = async (e) => {
    if (e.code === "Enter") {
      setIsLoading(true);
      console.log(inputValue, " this is our search term");
      //fetch data that needs some time
      const response = await axios.get(
        API_BASE_URL + "/?s=" + inputValue + "&apikey=aa660442"
      );
      console.log(response.data, " data from API");
      //set data not ready yet and eventually resort to promises thus use await!!
      setMovies(response.data.Search);
      setIsLoading(false);
    }
  };

  return (
    <div className="main">
      {/* {Navbar -> SearchBar} */}
      <NavBar
        inputValue={inputValue}
        setInputValue={setInputValue}
        search={search}
      />
      {/* {isLoading ? "Loading" : "Not Loading"} */}
      {/* body -> movielist */}
      <MovieList isLoading={isLoading} movieList={movies} />
      {/* Hi from Utkarsha! */}
    </div>
  );
}

export default App;
