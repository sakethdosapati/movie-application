import React,{ useState } from 'react'
import { useLocation } from 'react-router-dom';
import YouTube from 'react-youtube';

const ParticularMovie = () => {
    let location = useLocation();
    let specificMovie = location.state.cards;  
    let[trailer,setTrailer] = useState();

    async function getTrailer(id) {
        fetch(`http://api.themoviedb.org/3/movie/ ${id}/videos?api_key=c202f0c11aa8b52272804f5b020a8667`)
        .then(response => response.json())
        .then(x=> setTrailer(x.results[0].key))
        .catch(error => console.error('Error:', error));
    }
  return (
    <div>
        <section id='particular'>
        <img src={`https://image.tmdb.org/t/p/original/${specificMovie.backdrop_path}`} alt="Movie not visible" style={{width:"60%",height:"400px"}} id='img'/>
        <h3 id='h3'>{specificMovie.title}</h3>
        <p id='p'>{specificMovie.overview}</p>
        <b id='b'>Rating: {specificMovie.vote_average}</b>
        <br />
        <button onClick={()=>getTrailer(specificMovie.id)} id='button'>WatchTrailer</button>
        <div id='div'>
            {trailer && <YouTube videoId={trailer}/>}
        </div>
        </section>
    </div>
  )
}

export default ParticularMovie;