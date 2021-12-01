import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar"
import DcScreen from "../components/dc/DcScreen";
import MarvelScreen from "../components/marvel/MarvelScreen";
import SearchScreen from "../components/search/SearchScreen";
import Hero from "../components/hero/Hero";


const DashboardRoutes = () => {

    //*Important: no se necesitan los "/" en la V6
    return (
        <>

            <Navbar/>
            <Routes>
                <Route path="marvel" element={<MarvelScreen />} /> 
                <Route path="dc" element={<DcScreen />} />
                <Route path="search" element={<SearchScreen />} />
                <Route path='hero' element={<Hero />} />
                <Route path="/" element={<MarvelScreen />} />



            </Routes>
        </>
    )
}

export default DashboardRoutes
