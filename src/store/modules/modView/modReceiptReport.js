const nameLS = {
    dataName:'modReceiptReport'
}

export default {
    actions: {
        fetchModReceiptReport({commit}) { // кастыль надо чтомы запускало сразу мутацию
            const modReceiptReports = []
            commit('startModReceiptReport', modReceiptReports) // запуск мутании заливки стартовых данных
        }
    },
    mutations: {
        startModReceiptReport(state, modReceiptReports) { // стартовое заполнение
            if(window.localStorage.getItem(nameLS.dataName) == null || window.localStorage.getItem(nameLS.dataName) === null) {
                state.modReceiptReports = modReceiptReports
            } else {
                state.modReceiptReports = JSON.parse(window.localStorage.getItem(nameLS.dataName))
            }
        },
        upDateModReceiptReport(state, newObj) { // добарвение объекта с данными в LS
            state.modReceiptReports.unshift(newObj)
            window.localStorage.setItem(nameLS.dataName, JSON.stringify(state.modReceiptReports))
        }
    },

    state: {
        modReceiptReports: []
    },

    getters: {
        
        allModReceiptReport(state) { // вывод всех данных
            return state
        }
    }
}