import { Route, Routes } from "react-router-dom"

import { LoginPages } from "../auth/pages/LoginPages"

import { HeroesRoutes } from "../heroes/routes/HeroesRoutes"

export const AppRouter = () => {
  return (
    <>

      <Routes>

        <Route path="login" element={<LoginPages></LoginPages>}></Route>

        <Route path="/*" element={<HeroesRoutes></HeroesRoutes>}></Route>

      </Routes>
    
    </>
  )
}
