const nameLS = {
    dataName:'modReceiptFine'
}

export default {
    actions: {
        fetchModReceiptFine({commit}) { // кастыль надо чтомы запускало сразу мутацию
            const modReceiptFines = []
            commit('startModReceiptFine', modReceiptFines) // запуск мутании заливки стартовых данных
        }
    },
    mutations: {
        startModReceiptFine(state, modReceiptFines) { // стартовое заполнение
            if(window.localStorage.getItem(nameLS.dataName) == null || window.localStorage.getItem(nameLS.dataName) === null) {
                state.modReceiptFines = modReceiptFines
            } else {
                state.modReceiptFines = JSON.parse(window.localStorage.getItem(nameLS.dataName))
            }
        },
        upDateModReceiptFine(state, newObj) { // добарвение объекта с данными в LS
            state.modReceiptFines.unshift(newObj)
            window.localStorage.setItem(nameLS.dataName, JSON.stringify(state.modReceiptFines))
        }
    },

    state: {
        modReceiptFines: []
    },

    getters: {
        allModReceiptFine(state) { // вывод всех данных
            return state
        }
    }
}