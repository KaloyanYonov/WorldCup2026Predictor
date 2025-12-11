import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from "./pages/MainPage"
import GroupStage from "./pages/GroupStage"
import EuropeanPlayoffs from "./pages/EuropeanPlayoffs"
import IntercontinentalPlayoffs from "./pages/IntercontinentalPlayoffs"
import KnockOut from "./pages/KnockOut"



function App() {

  return(
    <div className="w-full min-h-screen text-white flex items-center justify-center bg-[#1B1B1B]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}></Route>
          <Route path="/groupStage" element={<GroupStage/>}></Route>
          <Route path="/intercontinentalPlayoffs" element={<IntercontinentalPlayoffs/>}></Route>
          <Route path="/EuropeanPlayoffs" element={<EuropeanPlayoffs/>}></Route>
          <Route path="/knockOutStage" element={<KnockOut/>}></Route>
        </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App
