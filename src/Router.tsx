import { Routes, Route } from "react-router-dom";
import { Help } from "./pages/Help";
import { Home } from "./pages/Home";
import { LogOut } from "./pages/Logout";
import { Movies } from "./pages/Movies";
import { SeriesPlayer } from "./pages/SeriesPlayer";
import { Recent } from "./pages/Recent";
import { SearchEmpty } from "./pages/Search/Searchempty";
import { Searching } from "./pages/Search/Searching";
import { Series } from "./pages/Series";
import { Settings } from "./pages/Settings";
import { MoviesPlayer } from "./pages/MoviesPlayer";


export function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/movies" element={<Movies/>}/>
            <Route path="/series" element={<Series/>}/>
            <Route path="/recent" element={<Recent/>}/>
            <Route path="/help" element={<Help/>}/>
            <Route path="/settings" element={<Settings/>}/>
            <Route path="/logout" element={<LogOut/>}/>
            <Route path="/search" element={<SearchEmpty/>}/>
            <Route path="/search/:slug" element={<Searching/>}/>
            <Route path="/:sl/:slug" element={<MoviesPlayer/>}/>
            <Route path="/series/:slug" element={<SeriesPlayer/>}/>
        </Routes>
    )
}