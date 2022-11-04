import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import NationalParks from './components/NationalParks'
import Home from './Home'

export default function Maint () {
    return (
        <div>
           <Routes>
            <Route path ="/" elements={<Home/>} />
            <Route path="/NationalParks" elements={<NationalParks />} />
            
            </Routes>
        </div>
    )
}