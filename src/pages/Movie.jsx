import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill } from "react-icons/bs"
import MovieCard from "../components/MovieCard";
//import "styles.css"

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    const getMovie = async (url) => {
        const answer = await fetch(url);
        const data = await answer.json();

        setMovie(data);
    }

    useEffect(() => {
        const movieUrl = `${moviesUrl}${id}?${apiKey}`;
        getMovie(movieUrl);
    }, [])

    return (
        <div className="movie-page">
            {movie && (<>
                <MovieCard movie={movie} showLink={false} />
                <p className="tag-line"></p>
            </>)}
        </div>
    )
}

export default Movie;