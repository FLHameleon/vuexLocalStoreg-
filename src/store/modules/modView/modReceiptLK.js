const nameLS = {
    dataName:'modReceiptLK'
}

export default {
    actions: {},
    mutations: {
        upDateModReceiptLK(state, newObj) { // добарвение объекта с данными в LS
            let byfer22 = JSON.parse(window.localStorage.getItem(nameLS.dataName))
            state.modReceiptLKs = byfer22
            state.modReceiptLKs.unshift(newObj)
            window.localStorage.setItem(nameLS.dataName, JSON.stringify(state.modReceiptLKs))
        }
    },

    state: {
        modReceiptLKs: []
    },

    getters: {}
}