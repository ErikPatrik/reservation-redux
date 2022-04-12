import { all } from 'redux-saga/effects'

import reservation from './reservation/sagas'

export function* rootSaga() {
    return yield all([
        reservation
    ])
}