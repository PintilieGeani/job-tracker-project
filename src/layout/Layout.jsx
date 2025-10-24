import { Outlet } from "react-router-dom";
import JobList from "../Pages/JobList";
import AppHeader from "../Components/AppHeader";
import AppFooter from "../Components/AppFooter";
import JobDetail from "../Pages/JobDetail";
import { useJobContext } from "../context/JobContext";


export default function Layout() {

    const { showDetails } = useJobContext()

    return (
        <>
            <div className="app-wrapper">
                <div className="main-layout">
                    <header>
                        <AppHeader />
                    </header>

                        <div className={showDetails ? "job-list-reduct" : "job-list"}>
                            <Outlet />
                        </div>

                        <div className={showDetails ? "job-detail" : "job-detail-hidden"}>
                            <JobDetail />
                        </div>

                </div>
            </div>
                <footer>
                    <AppFooter />
                </footer>
        </>
    )
}