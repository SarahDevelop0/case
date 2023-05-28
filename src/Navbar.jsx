import { Link, useMatch, useResolvedPath } from "react-router-dom"

function Navbar (){

return (
<nav className="navbar">
    <ul>
        <a href="/">Home</a>
        <a href="/">Joke Generator</a>
        <a href="/">Animal Generator</a>
    </ul>

</nav>
)
}



export default Navbar
