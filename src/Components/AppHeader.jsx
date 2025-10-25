import { NavLink, Navigate} from "react-router-dom"

export default function AppHeader(){
    return(
    <nav>
            <div className="logo">
                <img src="https://placehold.co/100x100?text=LOGO" alt="Logo" />
            </div>
            <div className="links">
                <NavLink to= "/">Home</NavLink>
                <NavLink to= "job-list">Lavori</NavLink>
                <NavLink to= "favorites">Preferiti</NavLink>
            </div>
    </nav>
    )
}