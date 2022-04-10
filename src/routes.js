import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './pages/Home/'
import Reservations from './pages/Reservations'

import Header from './components/Header';

export default function RoutesApp() {
    return(
        <Router>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/reservations" element={<Reservations/>} />
            </Routes>
        </Router>


    )
}