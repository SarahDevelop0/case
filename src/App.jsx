import { useState, useEffect } from 'react'
import './style/App.scss'


function App() {

  const [joke, setJoke] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  // https://api.chucknorris.io/jokes/random

  // useEffect(() => {
  //   fetch("https://api.chucknorris.io/jokes/random")
  //     .then(res => res.json())
  //     .then(
  //       (joke) => {
  //         // setJoke(joke.value);
  //         // console.log(joke)
  //       }
  //     )
  // })

  let GenerateJoke = () => {
    fetch("https://api.chucknorris.io/jokes/random")
    .then(res => res.json())
    .then(
      (joke) => {
        setJoke(joke.value);
        setImage(joke.icon_url)
        setCategory(joke.categories)
        console.log(joke)
      }
    )
  }

  return (
    <div className="App">
      <div className="jokes">
       <h1>Heere you can generate a random Chuck Norris joke, by clicking on the "Generate now" button</h1>
       <button className="joke_btn" onClick={GenerateJoke}>Generate Joke</button>
       <h2>{joke}</h2>
       <p>{image}</p>
       <p>{category}</p>
      </div>
     
    </div>
  )
}

export default App
