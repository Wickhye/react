import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        <h1>Loading Detail</h1>
      ) : (
        <div>
          <img src={movie.large_cover_image} />
          <h2>{movie.title_long}</h2>
          <p>{movie.date_uploaded}</p>
          <ul>
            {movie.genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
          <p>Like count: {movie.like_count}</p>
          <p>Runtime: {movie.runtime}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
