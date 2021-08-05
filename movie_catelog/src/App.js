import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Component from './components/Component'

const App = () => {
    const [newTitle, setNewTitle] = useState('')
    const [newGenre, setNewGenre] = useState([])
    const [newImage, setNewImage] = useState('')
    const [newRating, setNewRating] = useState(0)
    const [newCast, setNewCast] = useState([])
    const [newMovies, setNewMovies] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:3000/movies")
            .then((response) => {
                setNewMovies(response.data)
            })
    }, [])

    const handleNewTitle = (event) => {
        setNewTitle(event.target.value)
    }

    const handleNewGenre = (event) => {
        setNewGenre(event.target.value)
    }

    const handleNewImage = (event) => {
        setNewImage(event.target.value)
    }

    const handleNewRating = (event) => {
        setNewRating(event.target.value)
    }

    const handleNewCast = (event) => {
        setNewCast(event.target.value)
    }

    const handleNewMovieFormSubmit = (event) => {
        event.preventDefault();
        axios.post(
            "http://localhost:3000/movies",
            {
                title: newTitle,
                genre: newGenre,
                image: newImage,
                rating: newRating,
                cast: newCast
            }
        )
    }

    const handleDelete = (movieData) => {
        axios
            .delete(`http://localhost:3000/movies/${movieData._id}`)
            .then(() => {
                axios
                    .get("http://localhost:3000/movies")
                    .then((response) => {
                        setNewMovies(response.data)
                })
            })
    }

    const handleEditMovie = (movieData) => {
        axios
            .put(`http://localhost:3000/movies/${movieData._id}`,
                {
                    title: newTitle,
                    genre: newGenre,
                    image: newImage,
                    rating: newRating,
                    cast: newCast
                }
            )
            .then(() => {
                axios
                    .get("http://localhost:3000/movies")
                    .then((response) => {
                        setNewMovies(response.data)
            })
    }


    return (
        <main>
            <h1>Movies</h1>
            <section>
                <form onSubmit={handleNewMovieFormSubmit}>
                    Title: <input type='text' onChange={handleNewTitle} /><br/>
                    Genre: <input type='text' onChange={handleNewGenre} /><br/>
                    Image: <input type='url' onChange={handleNewImage} /><br/>
                    Rating: <input type='number' onChange={handleNewRating} /><br/>
                    Cast: <input type='text' onChange={handleNewCast} /><br/>
                    <input type='submit' value='Create New Movie' />
                </form>
            </section>
            <section>
                <h2>Movie List</h2>
                <ul>
                    {
                        newMovies.map((movie) => {
                            return (
                                <>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> d53c9506f2e1430ea2b78b8f25b4a46cef9a2b37
                                    <Component show={movie} />
                                    <form onSubmit={handleEditMovie}>
                                        Title: <input type='text' onChange={handleNewTitle} /><br/>
                                        Genre: <input type='text' onChange={handleNewGenre} /><br/>
                                        Image: <input type='url' onChange={handleNewImage} /><br/>
                                        Rating: <input type='number' onChange={handleNewRating} /><br/>
                                        Cast: <input type='text' onChange={handleNewCast} /><br/>
                                        <input type='submit' value='Edit Movie' />
                                    </form>
                                    <button onClick={ (event) => {
                                        handleDelete(movie) } }>Delete</button>
<<<<<<< HEAD
=======
                                <Component show={movie} />
>>>>>>> 5fca8d8f469f382710b153c6a1944c143275bdb2
=======

>>>>>>> d53c9506f2e1430ea2b78b8f25b4a46cef9a2b37
                                </>
                            )
                        })
                    }
                </ul>
            </section>
        </main>
    )
}

export default App;
