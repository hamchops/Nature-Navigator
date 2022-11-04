import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../Globals'



export default function Events () {

    const [events, setEvents] = useState ({})

    useEffect (() => {

        const getData = async () =>{
        const response = await axios.get(`${BASE_URL}/events`)
        setEvents(response.data.results)
    }

    getData()
    
}, [])

    return (
        <div>
            <h2> Event List </h2>
        </div>
    )
}