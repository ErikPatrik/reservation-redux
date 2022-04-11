import produce from "immer"

export default function reservation(state = [], action) {
    switch(action.type) {
        case 'ADD_RESERVATION':
            // return [ ...state, {
            //     ...action.trip,
            //     amount: 1, // passa a quantidade
            // }] //  pega tudo o que tem na array, e adiciona a trip
            return produce(state, draft => {
                // verifica se já existe uma viagem selecionada no array de state
                const tripIndex = draft.findIndex(trip => trip.id === action.trip.id)

                // se existe algum item dentro com o mesmo ID
                if (tripIndex >= 0) {
                    draft[tripIndex].amount +=1 // ele igual a ele + 1
                } else {
                    draft.push({
                        ...action.trip,
                        amount:1
                    })
                }
            })
        case 'REMOVE_RESERVATION':
            return produce(state, draft => {
                const tripIndex = draft.findIndex(trip => trip.id === action.id)

                // se encontrar
                if (tripIndex >= 0) {
                    draft.splice(tripIndex, 1) // exclui o item do array passando a posição e excluindo o primeiro objeto
                }

            })
        default:
            return []
    }
}