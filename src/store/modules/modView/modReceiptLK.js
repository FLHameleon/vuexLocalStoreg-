const nameLS = {
    dataName:'modReceiptLK'
}

export default {
    actions: {
        fetchModReceiptLK({commit}) { // кастыль надо чтомы запускало сразу мутацию
            const modReceiptLKs = []
            commit('startModReceiptLK', modReceiptLKs) // запуск мутании заливки стартовых данных
        }
    },
    mutations: {
        startModReceiptLK(state, modReceiptLKs) { // стартовое заполнение
            if(window.localStorage.getItem(nameLS.dataName) == null || window.localStorage.getItem(nameLS.dataName) === null) {
                state.modReceiptLKs = modReceiptLKs
            } else {
                state.modReceiptLKs = JSON.parse(window.localStorage.getItem(nameLS.dataName))
            }
        },
        upDateModReceiptLK(state, newObj) { // добарвение объекта с данными в LS
            state.modReceiptLKs.unshift(newObj)
            window.localStorage.setItem(nameLS.dataName, JSON.stringify(state.modReceiptLKs))
        }
    },

    state: {
        modReceiptLKs: []
    },

    getters: {
        
        allModReceiptLK(state) { // вывод всех данных
            return state
        }
    }
}