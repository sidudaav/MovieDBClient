import styles from './styles';

const MovieRow = ({ movie }) => {
    return (
        <table key={movie.id} style={styles.movieRow}>
            <tbody>
                <tr>
                    <td>
                        <img
                            alt="poster"
                            width="150"
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        />
                    </td>
                    <td width="20"></td>
                    <td>
                        <h3 style={styles.title}>{movie.title}</h3>
                        <p style={styles.overviewText}>
                            {movie.overview}
                        </p>
                        <a
                            style={styles.viewButton}
                            href={`https://www.themoviedb.org/movie/${movie.id}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            View Movie
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default MovieRow;
