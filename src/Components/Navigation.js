import { NavLink} from 'react-router-dom';
import classes from './Navigation.module.css';

const Navigation = ()=>{
   
return(
  
     <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  
  <div className="navbar-brand" >Navbar</div>
  
    
  

  <div className="navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink className="nav-link" activeClassName={classes.active} to="/home">Home</NavLink>
       
      </li>
      <li className="nav-item">
        <div className="nav-link" >Question</div>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/profile" activeClassName={classes.active}>Profile</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" activeClassName={classes.active} to="/register" >Register</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" activeClassName={classes.active} to="/login" >Log in</NavLink>
      </li>
    </ul>
    
  </div>
</nav>
    </div>
  

   
    
)
}

export default Navigation;