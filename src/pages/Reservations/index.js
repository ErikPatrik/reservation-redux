import React from 'react';
import { MdDelete } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { removeReservation } from '../../store/modules/reservation/actions';

import './style.css';

export default function Reservas() {
    const reservation = useSelector(state => state.reservation)
    const dispatch = useDispatch()

    const handleRemove = (id) => {
        dispatch(removeReservation(id))
    }

    return (
    <div>
        <h1 className="title">You request {reservation.length} reservation</h1>

        {reservation.map(res => (
            <div className="reservas" key={res.id}>
                <img
                src={res.image}
                alt={res.title}
                />
                <strong>{res.title}</strong>
                <span>{res.amount}</span>
                <button
                type="button"
                onClick={()=> handleRemove(res.id)}
                >
                <MdDelete size={20} color="#191919" />
                </button>
            </div>
        ))}

        <footer>
            <button type="button">Request reservations</button>
        </footer>

    </div>
    );
}