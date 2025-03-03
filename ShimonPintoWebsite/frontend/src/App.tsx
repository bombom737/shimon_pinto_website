import { Route, Routes } from "react-router-dom"
import LandingPage from "./views/LandingPage"
import "./App.css"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
    </Routes>
  )
}
