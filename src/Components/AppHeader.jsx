import { NavLink, Navigate} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBriefcase, faStar } from "@fortawesome/free-solid-svg-icons";

export default function AppHeader(){
    return(
    <nav>
            <div className="logo">
                <img src="./logo.png" alt="Logo" />
            </div>
            <div className="links">
                <NavLink to= "/"><FontAwesomeIcon icon={faHouse} /><span> Home</span></NavLink>
                <NavLink to= "job-list"><FontAwesomeIcon icon={faBriefcase} /> <span> Lavori</span></NavLink>
                <NavLink to= "favorites"><FontAwesomeIcon icon={faStar} /><span> Preferiti</span></NavLink>
            </div>
    </nav>
    )
}