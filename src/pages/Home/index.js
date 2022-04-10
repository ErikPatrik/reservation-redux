import React, { useState, useEffect } from 'react'
import {MdFlightTakeoff} from 'react-icons/md'

import api from '../../services/api'

import './style.css'

export default function Home() {
    const [trips, setTrips] = useState([])

    useEffect(() => {
        async function loadApi() {
            const response = await api.get('trips')

            setTrips(response.data)
        }

        loadApi()
    }, [])

    return(
        <div>
            <div className='box'>
                {trips.map(trip => (
                    <li key={trip.id}>
                        <img src={trip.image} alt={trip.title}/>
                        <strong>{trip.title}</strong>
                        <div>
                            <MdFlightTakeoff size={16} color="#000"/>
                        </div>
                        <span>Status: {trip.status ?  'Available' : 'Unvailable'}</span>

                        <button type='button' onClick={() => {}}>
                            <span>Request the reservation</span>
                        </button>
                    </li>
                ))}
            </div>
        </div>
    )
}