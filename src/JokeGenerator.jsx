import { useState } from 'react'
import axios from 'axios';
import image1 from './assets/chucknorris.jpeg'


function JokeGenerator (){

    const [joke, setJoke] = useState("");

   const getJoke = () => {
    axios.get('https://api.chucknorris.io/jokes/random')
    .then(res =>{
        setJoke(res.data.value)
    }).catch(err => {
        console.log(err)
    })
   }

    return (
            <div className="container">
                <div className="image-container">
                    <img src={image1} alt="chuckimage" />
                </div>
                <div className="text-container">
                    <h1>Here you can generate a random Chuck Norris joke, by clicking on the "Generate now" button</h1>
                    <button className="joke-btn" onClick={getJoke}>Generate Joke</button>
                    { joke && <p>{joke}</p>}
                </div>
            </div>
    )}

    export default JokeGenerator