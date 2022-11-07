import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import NationalParks from '../components/NationalParks'
import Home from './Home'
import Events from '../components/Events'

export default function Main () {
    return (
        <div>
           <Routes>
            <Route path ="/" element={<Home/>} />
            <Route exact path="/parks" element={<NationalParks />} />
            <Route path = "/events" element={<Events />} />
            
            </Routes>
        </div>
    )
}