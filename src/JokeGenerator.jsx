import { useState, useEffect } from 'react'
import image1 from './assets/chucknorris.jpeg'


function JokeGenerator (){

    const [joke, setJoke] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");

    let GenerateJoke = () => {
        fetch("https://api.chucknorris.io/jokes/random")
        .then(res => res.json())
        .then(
          (joke) => {
            setJoke(joke.value);
            setImage(joke.icon_url)
            setCategory(joke.categories)
            // console.log(joke)
          }
        )
      }

    return (

            <div className="jokes">
                <h1>Heere you can generate a random Chuck Norris joke, by clicking on the "Generate now" button</h1>
                <img src={image1} alt="chuckimage" />
                <button className="joke_btn" onClick={GenerateJoke}>Generate Joke</button>
                <h2>{joke}</h2>
                {/* <p>{image}</p> */}
                {/* <p>Category: {category}</p> */}
            </div>
       

    )
    }
    
    export default JokeGenerator