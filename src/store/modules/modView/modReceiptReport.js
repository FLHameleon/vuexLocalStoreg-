const nameLS = {
    dataName:'modReceiptReport'
}

export default {
    actions: {},
    mutations: {
        upDateModReceiptReport(state, newObj) { // добарвение объекта с данными в LS
            let byfer22 = JSON.parse(window.localStorage.getItem(nameLS.dataName))
            state.modReceiptReports = byfer22
            state.modReceiptReports.unshift(newObj)
            window.localStorage.setItem(nameLS.dataName, JSON.stringify(state.modReceiptReports))
        }
    },

    state: {
        modReceiptReports: []
    },

    getters: {}
}