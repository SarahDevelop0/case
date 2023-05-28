import { useState, useEffect } from 'react'


import axios from 'axios'


// function DogBreed(){
//     const [dogBreed, setDogBreed] = useState([])

//     useEffect(() => {
//         const loadDogBreeds = async () => {
//             const response = await axios.get("https://dog.ceo/api/breeds/list/all")
//             setDogBreed(response.data)
//             // console.log(dogBreed.message)
//         }

//         loadDogBreeds()
//         // console.log(dogBreed.message)
//     }, [])

//         return (
//         <div>
//             {/* {dogBreed.message} */}
//             {/* {dogBreed.message.forEach((item) => {
//                 <div>{item}</div>
//             })} */}
//             {[...dogBreed.message].forEach((item) => {
//                 <div className='container'>{item}</div>
//             } )}
          
//         </div>
//     )
// }

// function DogBreed(){
//     const [dogBreed, setDogBreed] = useState([])

//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await fetch('https://dog.ceo/api/breeds/list/all')
//             const json = await response.json()
//             setDogBreed(json)
//         }

//         fetchData()
      
//     }, [])

//     return (
//         <div className='dogs'>
//          {/* {console.log(dogBreed.message)} */}
//             <h2>Here you can choose a dog breed, and have more pictures displayed</h2>
//             {dogBreed.message&&Object.entries(dogBreed.message).map((item) => {
              
//                 return(
//                     <ul>
//                         {console.log(dogBreed.message)}
//                         {item&&Object.entries(item).map((key, value) => key + "" + value)}
//                     </ul>
//                 )
//             })
//             } 
              
          
//         </div>
//     )
// }



// function DogBreed(){

// const [dogBreed, setDogBreed] = useState()
    
// const getDogBreed = () => {
//     axios.get('https://dog.ceo/api/breeds/list/all')
//     // .then(response => response.json())
//     .then(response =>{
//         console.log(response.data.message)
//         setDogBreed(response.data.message)

//     }).catch(error =>{
//         console.log(error)
//     }) 
// }


//     return (
//         <div className="dogBreeds">
//             <button onClick={getDogBreed}>Get Dog Breeds</button>
//             {/* {dogBreed.map((item) =>
//            <div>{item}</div>)} */}
//         </div>
//     )
// }

// function DogBreed (){

//     const [dogBreed, setDogBreed] = useState([]);


//     let fetchDogBreed = () => {
//         fetch("https://dog.ceo/api/breeds/list/all")
//         .then(res => res.json())
//         .then(
//           (dogBreed) => {
//             setDogBreed(dogBreed.message);
      
//             console.log(dogBreed.message)
//           }
//         )
//       }

//     return (

//             <div className="dogBreed">
//                 <h1>Here you can pick any dog breed you like and see more pictures of it</h1>
//                 {/* <button className="dogBreed_btn" onClick={fetchDogBreed}>Fetch Dog Breeds</button> */}
//                 <button onClick={fetchDogBreed}>Get Dog Breeds</button>
//                  {/* {dogBreed.map((item) =>
//                      <p>{item}</p>)}  */}
//             </div>
       
    
//     )
//     }


function DogBreed(){
    const [dogBreed, setDogBreed] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://dog.ceo/api/breeds/list/all')
            const json = await response.json()
            setDogBreed(json)
            
        }

        fetchData()
      
    }, [])

    return (
        <div className='dogs'>
            <h2>Here you can choose a dog breed, and have more pictures displayed</h2>
            {dogBreed.message&&Object.entries(dogBreed.message).map((item) => {  
                return(
                    <ul>
                        {item&&Object.entries(item).map((key, value) => key + " " + value)}
                    </ul>
                )
            })
            } 
              
          
        </div>
    )
}
    
    export default DogBreed