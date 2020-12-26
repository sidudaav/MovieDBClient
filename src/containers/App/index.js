import { useState } from 'react';
import styles from './styles';

import axios from 'axios';

import MovieRow from '../../components/MovieRow';

const App = () => {
    const [movies, setMovies] = useState([]);

    const performSearch = async (searchTerm) => {
        const urlString =
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=` +
            searchTerm;

        const response = await axios.get(urlString);
        setMovies(response.data);
    };

    const renderMovies = () => {
        if (movies.results) {
            return movies.results.map((movie) => (
                <MovieRow movie={movie} />
            ));
        }
    };

    return (
        <div>
            <table style={styles.table}>
                <tbody>
                    <tr>
                        <td>
                            <img
                                alt="app icon"
                                width="50"
                                src="green_app_icon.svg"
                            />
                        </td>
                        <td width="8"></td>
                        <td style={styles.title}>MoviesDB Search</td>
                    </tr>
                </tbody>
            </table>

            <input
                style={styles.searchInput}
                placeholder="Enter search term"
                onChange={(e) => performSearch(e.target.value)}
            />

            <p style={styles.resultsText}>
                <span
                    style={{
                        fontWeight: 500,
                        color: 'black',
                    }}
                >
                    Results:{' '}
                </span>
                {movies.total_results}
            </p>
            {renderMovies()}
        </div>
    );
};

export default App;
