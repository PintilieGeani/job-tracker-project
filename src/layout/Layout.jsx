import { Outlet } from "react-router-dom";
import JobList from "../Pages/JobList";
import AppHeader from "../Components/AppHeader";
import AppFooter from "../Components/AppFooter";
import JobDetail from "../Pages/JobDetail";
import { useJobContext } from "../context/JobContext";
import { useState } from "react";


export default function Layout() {

    const { showDetails, setShowDetails } = useJobContext()

    const [closing, setClosing] = useState(false);

    const handleClose = () => {
        setClosing(true);
    };

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

                    <div
                        className={
                            showDetails
                                ? "job-detail active"
                                : closing
                                    ? "job-detail closing"
                                    : "job-detail-hidden"
                        }
                        onAnimationEnd={() => {
                            if (closing) {
                                setClosing(false); // resetta
                                setShowDetails(false); // chiudi davvero
                            }
                        }}
                    >
                        <JobDetail onClose={handleClose} />
                    </div>

                </div>
            </div>
            <footer>
                <AppFooter />
            </footer>
        </>
    )
}