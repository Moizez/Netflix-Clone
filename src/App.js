import React, { useEffect, useState } from 'react'

import './App.css'
import Tmdb from './services/tmdb'
import MovieList from './components/MovieList'
import FeaturedMovie from './components/FeaturedMovie'


const App = () => {

    const [movie, setMovie] = useState([])
    const [featuredMovie, setFeaturedMovie] = useState(null)

    // Pegando todos os filmes da Home
    const loadHome = async () => {
        let homeList = await Tmdb.getHomeList()
        setMovie(homeList)

        // Pegando apenas os originais Netflix
        let originals = homeList.filter(o => o.slug === 'originals')
        let randomMovie = Math.floor(Math.random() * (originals[0].items.results.length - 1))
        let choseMovie = originals[0].items.results[randomMovie]
        let infoMovie = await Tmdb.getMovieInfo(choseMovie.id, 'tv')
        setFeaturedMovie(infoMovie)
    }

    useEffect(() => {
        loadHome()
    }, [])

    return (
        <div className='page'>

            {featuredMovie &&
                <FeaturedMovie item={featuredMovie} />
            }

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