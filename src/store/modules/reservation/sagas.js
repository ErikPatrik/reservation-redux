import { call, put, all, takeLatest } from "@redux-saga/core/effects";
import api from "../../../services/api";
import { addReservationSuccess } from './actions'

function* addToReservation({id}) {
    const response = yield call(api.get, `trips/${id}`)

    // disparamos actions para passar para o reducer
    // put
    yield put(addReservationSuccess(response.data))
}

export default all([
    // takeLatest é usado para que, caso seja clicado 2 vezes em uma requisição
    // e a primeira não ser finalizada, será "pego" a última chamada, o último clique
    takeLatest('ADD_RESERVATION_REQUEST', addToReservation)
])