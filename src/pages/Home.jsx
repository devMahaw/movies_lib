import { useState, useEffect } from "react";

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    const [topMovies, setTopMovies] = useState([]);

    const getTopRatedMovies = async (url) => {
        const answer = await fetch(url);
        const data = await answer.json();

        setTopMovies(data.results);
    }

    useEffect(() => {
        const topRatedUrl = `${moviesUrl}top_rated?${apiKey}`;

        getTopRatedMovies(topRatedUrl);
    }, [])

    return (
        <div className="container">
            <h2 className="title">Melhores filmes:</h2>
            <div className="movies-container">
                {topMovies.length === 0 && <p>Carregando...</p>}
                {topMovies.length > 0 && topMovies.map((movie) =>
                    <p key={movie.title}>{movie.title}</p>)}
            </div>
        </div>
    )
}

export default Home;