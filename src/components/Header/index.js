import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import './style.css'

export default function Header() {
    const reservationSize = useSelector(state => state.reservation.length)

    return(
        <header className='container'>
            <Link to="/">
                <img className='logo' src={logo} alt='Logo'/>
            </Link>

            <Link className='reservation' to='/reservations'>
                <div>
                    <strong>Minhas reservas</strong>
                    <span>{reservationSize}</span>
                </div>
            </Link>
        </header>
    )
}