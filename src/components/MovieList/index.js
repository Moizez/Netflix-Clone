import React, { useState } from 'react';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import './style.css'

const MovieList = ({ title, items }) => {

    const [scrollX, setScrollX] = useState(0)

    const handleLeftButton = () => {
        let move = scrollX + Math.round(window.innerWidth / 2)//Número baseado na tela do usuário
        if (move > 0) {
            move = 0
        }
        setScrollX(move)
    }

    const handleRightButton = () => {
        let move = scrollX - Math.round(window.innerWidth / 2)
        let listWidth = items.results.length * 150
        if((window.innerWidth - listWidth) > move){
            move = (window.innerWidth - listWidth) - 60
        }
        setScrollX(move)
    }

    return (
        <div className='movieList'>
            <h2>{title}</h2>

            <div className='movieList--lefticon' onClick={handleLeftButton}>
                <NavigateBeforeIcon style={{ fontSize: 50 }} />
            </div>

            <div className='movieList--righticon' onClick={handleRightButton}>
                <NavigateNextIcon style={{ fontSize: 50 }} />
            </div>
            <div className='movieList--listarea'>
                <div className='movieList--list' style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150 //Largura do tamanho da lista x 150 (numero de items)
                }}>
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