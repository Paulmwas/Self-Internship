import { useEffect, useState } from "react"
import Search from "./Components/Search"
import Spinner from "./Components/Spinner";
import MovieCard from "./Components/MovieCard";
const API_BASE_URL = "https://api.themoviedb.org/3"
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method:'GET',
  headers:{
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}
const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('')
  const fetchMovies = async ()=>{
    setIsLoading(true)
    try {
      const endpoint= `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error('Failed to fetch new movies')
      }
      const data = await response.json();
      console.log(data);

      if(data.Response === 'False'){
        setErrorMessage(data.Error || "No Movies Found")
        setMovieList([]);
        return;
      }
      setMovieList(data.results);
      
    } catch (error) {
      console.error(`Error Fetching a movie: ${error}`)
      setErrorMessage('Error Searching Movies');
      
    }
    finally{
      setIsLoading(false)
    }

      
  }

  useEffect(()=>{
    fetchMovies()
  },[])
  const [searchItem, setSearchItem] = useState("This is disgusting")
  return (
    <main>
      <div className="pattern"/>
      <div className="wrapper">
        <header>
          
          <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without Hassle</h1>
          <Search searchItem={searchItem} setSearchItem={setSearchItem}/>
        </header>
        {isLoading ? <Spinner/> :errorMessage ? <p>{errorMessage}</p>:
        <ul>
          {movieList.map((movie)=>(
            <MovieCard key={movie.id} movie={movie}/>
          ))}
        </ul>
        }
      </div>
    </main>
  )
}

export default App