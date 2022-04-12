import React from 'react';
import { MdDelete, MdAddCircle, MdRemoveCircle } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { removeReservation, updateAmountReservation } from '../../store/modules/reservation/actions';

import './style.css';

export default function Reservas() {
    const reservation = useSelector(state => state.reservation)
    const dispatch = useDispatch()

    const handleRemove = (id) => {
        dispatch(removeReservation(id))
    }

    const decrementAmount = (trip) => {
        dispatch(updateAmountReservation(trip.id, trip.amount -1)) // need remove 1 quantity
    }

    const incrementAmount = (trip) => {
        dispatch(updateAmountReservation(trip.id, trip.amount +1)) // need add 1 quantity
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

                <div id="amount">
                    <button type="button" onClick={() => decrementAmount(res)}>
                        <MdRemoveCircle size={25} color="#191919" />
                    </button>
                    <input type="texto" readOnly value={res.amount} />
                    <button type="button" onClick={() => incrementAmount(res)}>
                        <MdAddCircle size={25} color="#191919" />
                    </button>
                </div>


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