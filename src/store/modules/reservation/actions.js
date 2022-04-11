export function addReservation(trip) {
    return {
        type: 'ADD_RESERVATION',
        trip
    }
}

export function removeReservation(id) {
    return {
        type: 'REMOVE_RESERVATION',
        id
    }
}