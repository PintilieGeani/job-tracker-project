
import { Route, Routes  } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./Pages/Home"
import JobList from "./Pages/JobList"
import JobDetail from "./Pages/JobDetail"


function App() {


  return (
    <>
    <Routes>

      <Route path="/" element = {<Layout />}>  {/*Inizio Layout*/}

      <Route index element = {<Home />}/>  {/*Lista dei Jobs*/}
      <Route  path="job-list" element = {<JobList />}/>  {/*Dettagli del job*/}
      <Route  path="job-detail/:slug" element = {<JobDetail />}/>  {/*Inizio Layout*/}
      </Route> {/*Fine Layout*/}
      
    </Routes>
      
    </>
  )
}

export default App
