import React from 'react';
import './style.css'

const FeaturedMovie = ({ item }) => {

    let releaseYear = new Date(item.first_air_date)
    //let genres = item.genres.map(i => i.name) # Usando o map() para listar os gêneros
    let genres = []
    for (let i in item.genres) {
        genres.push(item.genres[i].name)
    }

    let description = item.overview
    if (description.length > 200) {
        description = description.substring(0, 250) + '...'
    }

    return (
        <section className='featuredMovie' style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className='featuredMovie--vertical'>
                <div className='featuredMovie--horizontal'>
                    <div className='featuredMovie--name'>{item.original_name}</div>
                    <div className='featuredMovie--info'>
                        <div className='featuredMovie--points'>{item.vote_average} pontos</div>
                        <div className='featuredMovie--year'>{releaseYear.getFullYear()}</div>
                        <div className='featuredMovie--seasons'>{item.number_of_seasons} temporada{item.number_of_seasons !== 1 && 's'}</div>
                    </div>
                    <div className='featuredMovie--description'>{description}</div>
                    <div className='featuredMovie--buttons'>
                        <a href={`/watch/${item.id}`} className='featuredMovie--watchbutton'>► Assistir</a>
                        <a href={`/list/${item.id}`} className='featuredMovie--watchlistbutton'>+ Minha Lista</a>
                    </div>
                    <div className='featuredMovie--genres'>
                        <strong>Gênero{genres.length > 1 && 's'}: </strong>{genres.join(', ')}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedMovie

