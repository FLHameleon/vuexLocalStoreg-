const nameLS = {
    dataName:'modReceiptFine'
}

export default {
    actions: {},
    mutations: {
        upDateModReceiptFine(state, newObj) { // добарвение объекта с данными в LS
            state.modReceiptFines = JSON.parse(window.localStorage.getItem(nameLS.dataName))
            state.modReceiptFines.unshift(newObj)
            window.localStorage.setItem(nameLS.dataName, JSON.stringify(state.modReceiptFines))
        }
    },

    state: {
        modReceiptFines: []
    },

    getters: {}
}