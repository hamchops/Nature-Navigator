import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../Globals'



export default function NationalPark () {

    const [nationalParks, setNationalParks] = useState ({})

    useEffect (() => {

        const getData = async () =>{
        const response = await axios.get(`${BASE_URL}`)
        setNationalParks(response.data.results)
    }

    getData()
    
}, [])

    return (
        <div>
            <h2> Park List </h2>
        </div>
    )
}