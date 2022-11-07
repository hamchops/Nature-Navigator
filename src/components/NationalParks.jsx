import { useState, useEffect } from 'react'
import axios from 'axios'
// import { BASE_URL } from '../Globals'


export default function NationalParks () {

    const [ setNationalParks] = useState ({})

    useEffect (() => {

//         const getNationalParks = async () =>{
//         const response = await axios.get(`https://developer.nps.gov/api/v1/parks`)
//         setNationalParks(response.data)
//         console.log(response)
//     }

//     getNationalParks()
    
// }, [])
async function getData () {
        const axios = require ('axios')
         const res = await axios.get('https://developer.nps.gov/api/v1/get', {
            headers: {
                'X-API-KEY':'jC57fErKXSOJp9TWfqYWNEIET7FxgUSdJ3iHD1eS'}
            });

         return ( res.data.headers['X-API-KEY'] )
        }

//         const res = axios.post('https://developer.nps.gov/api/v1/post', {
//     headers: {
//         'X-API-KEY':'jC57fErKXSOJp9TWfqYWNEIET7FxgUSdJ3iHD1eS'
//     }
});

// res.data.headers['X-API-KEY']
    


    return (
        <div>
            
            <h2> Park List </h2>
        </div>
    )
    }