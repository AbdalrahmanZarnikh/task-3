import "./NavBar.css";
import "../../style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BtnNav from "../BtnNav/BtnNav"
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom'


function NavBar() {
   function Show(){
      const menu=document.querySelector(".menu")
      menu.classList.toggle("active")
   }




   

  return (
    <div className="container">
      <div className="NavBar">
        <span className="logo">VILLA</span>
        <ul className="list">
          <li>
          <NavLink to="/" className={({isActive})=>isActive ? "active" : ""}>Home</NavLink>
          </li>
          <li>
          <NavLink to="/properties" className={({isActive})=>isActive ? "active" : ""}>Properties</NavLink>
          </li>
          <li>
          <NavLink to="/singleproperty" className={({isActive})=>isActive ? "active" : ""}>Property Details</NavLink>
          </li>
          <li>
          <NavLink to="/contactus" className={({isActive})=>isActive ? "active" : ""}>Contact Us</NavLink>
          </li>
          <BtnNav/>
        </ul>
          <button onClick={Show} className="bars"><FontAwesomeIcon icon={faBars} /></button>
      </div>
      <div className="menu">
        <ul >
          <li>
          <NavLink to="/" className={({isActive})=>isActive ? "active":""}>Home</NavLink>
          </li>
          <li>
          <NavLink to="/properties" className={({isActive})=>isActive ? "active":""}>Properties</NavLink>
          </li>
          <li>
          <NavLink to="/singleproperty" className={({isActive})=>isActive ? "active":""}>Property Details</NavLink>
          </li>
          <li>
          <NavLink to="/contactus" className={({isActive})=>isActive ? "active":""}>Contact Us</NavLink>
          </li>
          <BtnNav/>
        </ul>

        </div>
    </div>
  );
}

export default NavBar;
