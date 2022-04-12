//comentei pois usamos o redux saga, agora passamos somente o id
// export function addReservation(trip) {
//     return {
//         type: 'ADD_RESERVATION',
//         trip
//     }
// }

// Este o SAGA escuta
export function addReservationRequest(id) {
    return {
        type: 'ADD_RESERVATION_REQUEST',
        id
    }
}

// Este o REDUCER escuta
export function addReservationSuccess(trip) {
    return {
        type: 'ADD_RESERVATION_SUCCESS',
        trip
    }
}

export function removeReservation(id) {
    return {
        type: 'REMOVE_RESERVATION',
        id
    }
}

export function updateAmountReservation(id, amount) {
    return {
        type: 'UPDATE_RESERVATION',
        id,
        amount
    }
}