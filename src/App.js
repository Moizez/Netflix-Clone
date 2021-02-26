import React, { useEffect, useState } from 'react'

import './App.css'
import Tmdb from './services/tmdb'
import MovieList from './components/MovieList'
import FeaturedMovie from './components/FeaturedMovie'
import Header from './components/Header'

const App = () => {

    const [movie, setMovie] = useState([])
    const [featuredMovie, setFeaturedMovie] = useState(null)
    const [bgHeader, setBgHeader] = useState(false)

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

    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 10) {
                setBgHeader(true)
            } else {
                setBgHeader(false)
            }
        }

        window.addEventListener('scroll', scrollListener)
        return () => {
            window.removeEventListener('scroll', scrollListener)
        }
    }, [])

    return (
        <div className='page'>

            <Header bgHeader={bgHeader} />

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
            <footer>
                Feito como prática de React JS por Moizez Henrique | Analista de Sistemas<br />
                Todos os direitos de imagem para a Netflix e do consumo de dados para o site themoviedb.org
            </footer>

            {movie.length <= 0 &&
                <div className='loading'>
                    <img src='https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif' alt='carregando' />
                </div>
            }

        </div>

    )
}

export default App