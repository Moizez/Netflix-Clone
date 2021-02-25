import React, { useEffect, useState } from 'react'

import './App.css'
import Tmdb from './services/tmdb'
import MovieList from './components/MovieList'


const App = () => {

    const [movie, setMovie] = useState([])

    const loadHome = async () => {
        let homeList = await Tmdb.getHomeList()
        setMovie(homeList)
    }

    useEffect(() => {
        loadHome()
    }, [])

    return (
        <div className='page'>
            <section className='lists'>
                {movie.map((item, key) => (
                    <MovieList
                        key={key}
                        title={item.title}
                        items={item.items}
                    />
                ))}
            </section>
        </div>
    )
}

export default App