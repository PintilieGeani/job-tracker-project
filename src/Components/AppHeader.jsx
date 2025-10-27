import { NavLink, Navigate} from "react-router-dom"

export default function AppHeader(){
    return(
    <nav>
            <div className="logo">
                <img src="./logo.png" alt="Logo" />
            </div>
            <div className="links">
                <NavLink to= "/">Home</NavLink>
                <NavLink to= "job-list">Lavori</NavLink>
                <NavLink to= "favorites">Preferiti</NavLink>
            </div>
    </nav>
    )
}