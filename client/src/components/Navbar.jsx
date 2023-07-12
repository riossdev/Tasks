import { Link } from 'react-router-dom'

function NavBar (){
  return(
    <div>
      <h1>CRUD ... Sandiego🚀...</h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/new'>Create taks</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar;
