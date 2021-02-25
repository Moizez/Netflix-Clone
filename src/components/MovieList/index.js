import React from 'react';

import './style.css'

const MovieList = ({ title, items }) => {
    return (
        <div className='movieList'>
            <h2>{title}</h2>
            <div className='movieList--listarea'>
                <div className='movieList--list'>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div className='movieList--item' key={key}>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MovieList