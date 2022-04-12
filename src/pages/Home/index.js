import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addReservationRequest } from '../../store/modules/reservation/actions'

import {MdFlightTakeoff} from 'react-icons/md'

import api from '../../services/api'

import './style.css'

export default function Home() {
    const dispatch = useDispatch()
    const [trips, setTrips] = useState([])

    useEffect(() => {
        async function loadApi() {
            const response = await api.get('trips')

            setTrips(response.data)
        }

        loadApi()
    }, [])

    const handleAdd = (id) => {
        dispatch(addReservationRequest(id))
    }

    return(
        <div>
            <div className='box'>
                {trips.map(trip => (
                    <li key={trip.id}>
                        <img src={trip.image} alt={trip.title}/>
                        <strong>{trip.title}</strong>
                        <span>Status: {trip.status ?  'Available' : 'Unvailable'}</span>

                        <button type='button' onClick={() => {
                            handleAdd(trip.id)
                        }}>
                        <div>
                            <MdFlightTakeoff size={16} color="#FFF"/>
                        </div>
                        <span>Request reservation</span>
                        </button>
                    </li>
                ))}
            </div>
        </div>
    )
}