import { useState, useEffect } from 'react'
import axios from 'axios'



export default function NationalParks () {

    const [nationalParks, setNationalParks] = useState ({})

    useEffect (() => {

        const getData = async () =>{
        const response = await axios.get()
    }

    getData ()
    
}, [])

    return (
        <div>
            <h2> Park List </h2>
        </div>
    )
}