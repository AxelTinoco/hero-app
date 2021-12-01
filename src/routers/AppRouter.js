import { Routes, Route } from "react-router-dom";
import DcScreen from "../components/dc/DcScreen";
import LoginScreen from "../components/login/LoginScreen";
import MarvelScreen from "../components/marvel/MarvelScreen";
import SearchScreen from "../components/search/SearchScreen";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";

const AppRouter = () => {
    return (
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path="/" element={<MarvelScreen />} />
                <Route path="/marvel" element={<MarvelScreen />} />
                <Route path="/dc" element={<DcScreen />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/search" element={<SearchScreen />} />


                
            </Routes>

        </BrowserRouter>
    )
}

export default AppRouter
