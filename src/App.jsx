import Header from "./components/header/Header"
import './app.css'
import Hero from "./components/hero/Hero"
import Welcome from "./components/welcome/Welcome"
import MenuPage from "./pages/menu/MenuPage"
import { Routes, Route, Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet/>
        </>
    )
}

function App() {

    return (
        <div>
            APP
            <Routes>
                <Route path="/a3lesson/" element={<Layout />}>
                    <Route path="/a3lesson/" element={<>
                        <Hero />
                        <Welcome />
                    </>} />
                    <Route path="/a3lesson/menu" element={<MenuPage />} />

                </Route>
            </Routes>
        </div>
    )
}

export default App