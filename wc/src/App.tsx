import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from "./pages/MainPage"
import GroupStage from "./pages/GroupStage"
import EuropeanPlayoffs from "./pages/EuropeanPlayoffs"
import IntercontinentalPlayoffs from "./pages/IntercontinentalPlayoffs"



function App() {

  return(
    <div className="flex items-center justify-center bg-linear-90 from-orange-100 to-green-400">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}></Route>
          <Route path="/groupStage" element={<GroupStage/>}></Route>
          <Route path="/intercontinentalPlayoffs" element={<IntercontinentalPlayoffs/>}></Route>
          <Route path="/EuropeanPlayoffs" element={<EuropeanPlayoffs/>}></Route>
        </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App
